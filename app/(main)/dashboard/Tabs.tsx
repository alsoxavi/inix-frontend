import { Tabs } from "@heroui/react";
import ProgressIem from "./ProgressItemCard";

const earringRoutes = [
    {
        progress: 60,
        title: "Aprendiendo desde 0",
        items: "8 Modulos"
    },
    {
        progress: 60,
        title: "Bienvenido a la empreza",
        items: "8 Modulos"
    },
]

const earringModules = [
    {
        progress: 60,
        title: "Aprendiendo desde 0",
        items: "8 Pasos"
    },
    {
        progress: 60,
        title: "Bienvenido a la empreza",
        items: "8 Pasos"
    },
]

export function DashboardTabs() {
    return (
        <Tabs className="w-full" variant="secondary">
            <Tabs.ListContainer className="max-w-md">
                <Tabs.List aria-label="Options">
                    <Tabs.Tab id="routes">
                        <h2 className="font-bold">Rutas Pendientes</h2>
                        <Tabs.Indicator />
                    </Tabs.Tab>
                    <Tabs.Tab id="modules">
                        <h2 className="font-bold">Modulos Pendientes</h2>
                        <Tabs.Indicator />
                    </Tabs.Tab>
                </Tabs.List>
            </Tabs.ListContainer>
            <Tabs.Panel className="pt-4" id="routes">
                {
                    earringRoutes.map(route => (
                        <ProgressIem
                            items={route.items}
                            progress={route.progress}
                            title={route.title}
                            buttonLabel="Ir a la ruta"
                            key={route.title}
                        />)
                    )
                }
            </Tabs.Panel>
            <Tabs.Panel className="pt-4" id="modules">
                {
                    earringRoutes.map(route => (
                        <ProgressIem
                            items={route.items}
                            progress={route.progress}
                            title={route.title}
                            buttonLabel="Ir al modulo"
                            key={route.title}
                        />)
                    )
                }
            </Tabs.Panel>
        </Tabs>
    );
}