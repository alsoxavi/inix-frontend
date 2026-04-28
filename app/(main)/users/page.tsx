import { Button, Input } from "@heroui/react";
import { UsersTable } from "./userstable";

export default function Users() {
  return (
        <div>
          <h2 className="font-bold text-xl mb-3">Administración de usuarios</h2>
          <div className="mb-4"><span className="text-gray-500" >Gestiona que usuarios tienen acceso a la plataforma y sus crusos.</span></div>
          <div className="flex relative mb-5">
            <Input fullWidth placeholder="Busca un usuario por nombre, documento o correo..." className="rounded-md pl-8" />
            <img className="absolute top-2 left-2" src="/search-icon.svg" alt="" />
            <Button className="rounded-md ml-5" > <img src="/add-person.svg" alt="" /> Crear usuario</Button>
          </div>
          <UsersTable />
        </div>
  )
}