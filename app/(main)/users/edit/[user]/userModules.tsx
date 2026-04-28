import ApprovedChip from '@/components/layout/ApprovedChip'
import ExpiredChip from '@/components/layout/ExpiredChip'
import PendingChip from '@/components/layout/PendingChip'
import { Checkbox, Input, Label } from '@heroui/react'

const UserModules = () => {
    return (
        <div>
            <Input className="p-2 bg-[#F8FAFC] rounded-md w-full mb-5" />
            <div className="grid grid-cols-5">
                <div className="flex items-center gap-3 mb-3 col-span-4">
                    <Checkbox id="form-notifications" name="notifications" value="on" className="ml-2">
                        <Checkbox.Control>
                            <Checkbox.Indicator />
                        </Checkbox.Control>
                    </Checkbox>
                    <Checkbox.Content>
                        <Label htmlFor="form-notifications">Sistema de gestión de calidad.</Label>
                    </Checkbox.Content>
                </div>
                <div className="col-span-1" >
                    <ApprovedChip text="Aprobado" />
                </div>
            </div>
            <div className="grid grid-cols-5">
                <div className="flex items-center gap-3 mb-3 col-span-4">
                    <Checkbox id="form-notifications" name="notifications" value="on" className="ml-2">
                        <Checkbox.Control>
                            <Checkbox.Indicator />
                        </Checkbox.Control>
                    </Checkbox>
                    <Checkbox.Content>
                        <Label htmlFor="form-notifications">Sistema de gestión ambiental.</Label>
                    </Checkbox.Content>
                </div>
                <div className="col-span-1" >
                    <ExpiredChip text='Vencido' />
                </div>
            </div>
            <div className="grid grid-cols-5">
                <div className="flex items-center gap-3 mb-3 col-span-4">
                    <Checkbox id="form-notifications" name="notifications" value="on" className="ml-2">
                        <Checkbox.Control>
                            <Checkbox.Indicator />
                        </Checkbox.Control>
                    </Checkbox>
                    <Checkbox.Content>
                        <Label htmlFor="form-notifications">Sistema de gestión de seguridad y salud en el trabajo.</Label>
                    </Checkbox.Content>
                </div>
                <div className="col-span-1" >
                    <PendingChip text='Pendiente' />

                </div>
            </div>
            <div className="grid grid-cols-5">
                <div className="flex items-center gap-3 mb-3 col-span-4">
                    <Checkbox id="form-notifications" name="notifications" value="on" className="ml-2">
                        <Checkbox.Control>
                            <Checkbox.Indicator />
                        </Checkbox.Control>
                    </Checkbox>
                    <Checkbox.Content>
                        <Label htmlFor="form-notifications">Otro curso nunca asignado.</Label>
                    </Checkbox.Content>
                </div>
                <div className="col-span-1" >
                    <ApprovedChip text="Aprobado" />
                </div>
            </div>
        </div>
    )
}

export default UserModules