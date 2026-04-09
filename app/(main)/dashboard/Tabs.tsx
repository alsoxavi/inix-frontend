import { Tabs } from "@heroui/react";

export function DashboardTabs() {
    return (
        <Tabs className="w-full max-w-md" variant="secondary">
            <Tabs.ListContainer>
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
                <p>View your project overview and recent activity.</p>
            </Tabs.Panel>
            <Tabs.Panel className="pt-4" id="modules">
                <p>Track your metrics and analyze performance data.</p>
            </Tabs.Panel>
        </Tabs>
    );
}