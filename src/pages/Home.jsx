import Title from "../components/Title";
import TechList from "../components/TechList.jsx";
import {useTechs} from "../hooks/useTechs.js";
import { useUserStore } from '../store/useUserStore.js';

export default function Home() {
    const user = useUserStore((state) => state.user);
    const login = useUserStore((state) => state.login);
    const logout = useUserStore((state) => state.logout);
    const { techs, isLoading, error } = useTechs();

    return (
        <section>
            <Title text = "Gymnastics Websites for All"/>

            { !user && (
                <button onClick={() => login({ name :'Emilio'})}>
                    Login
                </button>
            )}

            { user && (
                <>
                <p>Welcome Coach {user.name}</p>
                <button onClick={logout}>
                    Logout
                </button>
                </>
            )}

            <hr/>
            {isLoading && <p>Loading techs...</p>}

            {error && (
                <p style={{ color: 'crimson'}}>
                    Error: {error}
                </p>
            )}

            {!isLoading && !error && (
                <TechList items={techs}/>
            )}
        </section>
    )
}