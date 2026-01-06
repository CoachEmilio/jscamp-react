import { use } from "react";
import Title from "../components/Title.jsx"
import { useUserStore } from '../store/useUserStore.js';

export default function About() {
    const user = useUserStore((state) => state.user);

    return (
        <section>
            <h2>About</h2>
            {user ? (
                    <p>Usuario Logueado {user.name}</p>
                ): (
                    <p>No hay usuario Logueado</p>
                )}
        </section>
    )
}