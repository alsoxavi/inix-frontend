import useSession from "@/hooks/useSession"
import Cards from "./Cards";

export default function Dashboard() {
    const { getUserData } = useSession();
    const { name } = getUserData()
    return (
        <div>
            <h1>Dashboard</h1>
            <span>¡Bienvenido de vuelta {name}!</span>
            <Cards />
            <div>
                tabs
            </div>
        </div>
    )
}