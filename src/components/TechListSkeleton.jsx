export default function TechListSkeleton({rows = 5}) {
    return (
        <ul>
            {Array.from({length: rows}).map((_, index) => (
                <li key={index}>
                    Cargando...
                </li>
            ))}
        </ul>
    )
}