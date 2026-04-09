import useSession from "@/hooks/useSession"
import Cards from "./Cards";
import { DashboardTabs } from "./Tabs";

export default function Dashboard() {
    const { getUserData } = useSession();
    const { name } = getUserData()
    return (
        <div>
            <h1 className="font-bold text-2xl">Dashboard</h1>
            <span className="text-gray-400">¡Bienvenido de vuelta {name}!</span>
            <Cards />
            <DashboardTabs />
        </div>
    )
}