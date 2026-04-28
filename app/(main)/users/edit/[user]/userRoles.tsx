import { Checkbox, Label } from "@heroui/react";

export function UserRoles() {
    return (
        <div className="m-5 p-10 rounded-xl bg-white h-[50%]">
            <h2 className="text-lg font-bold mb-3">Roles</h2>
            <input type="text" placeholder="Buscar un rol por el nombre..." className="p-2 bg-[#F8FAFC] rounded-md w-full mb-3" />
            <div className="flex items-center gap-3 mb-3">
                <Checkbox id="form-notifications" name="notifications" value="on">
                    <Checkbox.Control>
                        <Checkbox.Indicator />
                    </Checkbox.Control>
                </Checkbox>
                <Checkbox.Content>
                    <Label htmlFor="form-notifications">Admin.</Label>
                </Checkbox.Content>
            </div>
            <div className="flex items-center gap-3 mb-3">
                <Checkbox id="form-notifications" name="notifications" value="on">
                    <Checkbox.Control>
                        <Checkbox.Indicator />
                    </Checkbox.Control>
                </Checkbox>
                <Checkbox.Content>
                    <Label htmlFor="form-notifications">Creador de contenido.</Label>
                </Checkbox.Content>
            </div>
            <div className="flex items-center gap-3 mb-3">
                <Checkbox id="form-notifications" name="notifications" value="on">
                    <Checkbox.Control>
                        <Checkbox.Indicator />
                    </Checkbox.Control>
                </Checkbox>
                <Checkbox.Content>
                    <Label htmlFor="form-notifications">Administrador de cuentas.</Label>
                </Checkbox.Content>
            </div>
        </div>
    );
}