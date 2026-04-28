import DropdownComponent from "@/components/DropdownComponent.tsx";

const DROPDOW_OPTIONS = [
    {
        text: "Cédula de extranjería",
        value: "Cédula de extranjería",
    },
    {
        text: "Cédula de ciudadanía",
        value: "Cédula de ciudadanía",
    },
    {
        text: "Pasaporte",
        value: "Pasaporte",
    },
]

const UserInformation = ({}: { data: string }) => {
    return (
        <div className="m-5 p-10 rounded-xl bg-white h-[50%]">
            <h2 className="text-lg font-bold mb-5">Información de Usuario</h2>
            <div className="grid grid-cols-2 mb-4">
                <div className="flex flex-col mr-1">
                    <label htmlFor="name" className="font-semibold text-sm mb-1">Nombres</label>
                    <input type="text" id="name" placeholder="Ej. Miguel" className="p-2 bg-[#F8FAFC] rounded-md" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="lastname" className="font-semibold text-sm mb-1">Apellidos</label>
                    <input type="text" id="lastname" placeholder="Ej. Zapata Herrero" className="p-2 bg-[#F8FAFC] rounded-md" />
                </div>
            </div>
            <div className="flex flex-col mb-4">
                <label htmlFor="email" className="font-semibold text-sm mb-1">Correo</label>
                <input id="email" className="p-2 bg-[#F8FAFC] rounded-md" placeholder="correo@email.com" />
            </div>
            <div className="grid grid-cols-2 items-end">
                <DropdownComponent
                    label="Documento de identidad"
                    options={DROPDOW_OPTIONS}
                />
                <input type="text" className="ml-3 p-2 bg-[#F8FAFC] rounded-md h-10" />
            </div>
        </div>
    )
}

export default UserInformation