import { Tabs } from '@heroui/react'
import UserModules from './userModules'

const UserAssignations = () => {
    return (
        <div>
            <h2 className="text-lg font-bold mb-5">Asignación de contenido</h2>
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
                    hola
                </Tabs.Panel>
                <Tabs.Panel className="pt-4" id="modules">
                    <UserModules />
                </Tabs.Panel>
            </Tabs>
        </div>
    )
}

export default UserAssignations