import { useMemo, useState, useCallback } from "react";
import Title from "../components/Title";
import TechList from "../components/TechList.jsx";
import TechListSkeleton from "../components/TechListSkeleton.jsx";
import {useTechs} from "../hooks/useTechs.js";
import { useFavoriteStore } from "../store/useFavoriteStore.js";


export default function Techs() {
    const [forceError, setForceError] = useState(false)
    const [query, setQuery] = useState('')
    const [onlyFavorites, setOnlyFavorites] = useState(false)

    const { techs, isLoading, error } = useTechs(
        forceError ? '/techs-404.json' : '/techs.json')

    const favorites = useFavoriteStore((s) => s.favorites)
    const toggleFavorite = useFavoriteStore((s) => s.toggleFavorite)

    const handleToggleFavorite = useCallback(
        (id) => {
            toggleFavorite(id)
        },
        [toggleFavorite]
    )

    const filteredTechs = useMemo(() => {
        const q = query.trim().toLowerCase()
        let list = techs

        if (onlyFavorites) {
            list = list.filter((tech) => favorites.includes(tech.id))
        }

        if (q !== '') {
            list = list.filter((tech) => tech.name.toLowerCase().includes(q)
        )
        }

        const favs = list.filter((tech) => favorites.includes(tech.id))
        const notFavs = list.filter((tech) => !favorites.includes(tech.id))

        return [...favs, ...notFavs]
    }, [techs, query, onlyFavorites, favorites])
    
    console.log('Render: Techs')
    return (
        <section>
            <Title text="Techs"/>

            <div className="results-count">
                <input id="search-tech"
                    type="text"
                    placeholder="Buscar tech..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value.trimStart())}
                />
                {query.trim() !== '' && (
                    <button onClick={() => setQuery('')}>
                        Limpiar búsqueda
                    </button>
                )}

                <label>
                    <input id="only-favorites"
                        type="checkbox"
                        checked={onlyFavorites}
                        onChange={(e) => setOnlyFavorites(e.target.checked)}
                    />
                    {' '}Solo favoritos
                </label>

                <label>
                    <input id="force-error"
                        type="checkbox"
                        checked={forceError}
                        onChange={(e) => setForceError(e.target.checked)}
                    />
                    {' '}Forzar error (404)
                </label>
            </div>

            <hr/>
            
            {isLoading && <TechListSkeleton rows={5} />}

            {isLoading && error && (
                <p style={{ color: 'crimson'}}>
                    Error: {error}
                </p>
            )}

            {!isLoading && !error && (
                <>
                    {filteredTechs.length === 0 ? (
                        onlyFavorites ? (
                            <p>No tenés favoritos todavía. Marca alguna estrella ⭐</p>
                    ) : (
                        <p>No hay resultados para tu búsqueda</p>
                    )
                ) : (
                        <TechList 
                            items={filteredTechs}
                            favorites={favorites}
                            onToggleFavorite={handleToggleFavorite}
                        />
                    )}
                    
                    <p>Resultados: {filteredTechs.length}</p>
                    <p>Favoritos: {favorites.length}</p>
                </>
            )}
        </section>
    )
}