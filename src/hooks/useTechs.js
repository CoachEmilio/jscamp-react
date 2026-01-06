import { useEffect, useState } from 'react';
//first custom hook

export function useTechs(url = '/techs.json') {
    const [techs, setTechs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        async function loadTechs() {
            try {
                setIsLoading(true);
                setError(null);

                const res = await fetch(url, { signal: controller.signal })

                if (!res.ok) {
                    //muchos servidores devuelven HTML en errores 404 o 500
                    //por eso no podemos leer res.json() directamente como texto
                    const bodyText = await res.text().catch(() => '');
                    const extra = bodyText ? ' (respuesta no-JSON)' : '';
                    throw new Error(`HTTP ${res.status}${extra}`);
                }

                //Si esta OK, intentamos JSON
                const data = await res.json();
                setTechs(data);
            } catch (err) {
                if (err.name === 'AbortError') return;
                setError(err.message ?? 'Error desconocido');
            } finally {
                setIsLoading(false);
            }
        }

        loadTechs();

        return () => controller.abort();
    }, []);

    return { techs, isLoading, error };
}