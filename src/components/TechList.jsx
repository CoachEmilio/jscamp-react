export default function TechList({items, onToggleFavorite, favorites}){
    return (
        <ul>
            {items.map((tech) => {
                const isFav = favorites?.includes(tech.id)

        return (
            <li key={tech.id} style={{ display : 'flex', gap : 8, alignItems: 'center' }}>
                <span>{tech.name}</span>

                {onToggleFavorite && (
                    <button onClick={() => onToggleFavorite(tech.id)}>
                        {isFav ? '★'  : '☆'}
                    </button>
                )}
            </li>
            )
        })}
        </ul>
    )
}