import useSession from "@/hooks/useSession"
import Cards from "./Cards";
import { DashboardTabs } from "./Tabs";

export default function Dashboard() {
    const { getUserData } = useSession();
    const { name } = getUserData()
    return (
        <div>
            <h1>Dashboard</h1>
            <span>¡Bienvenido de vuelta {name}!</span>
            <Cards />
            <DashboardTabs />
        </div>
    )
}