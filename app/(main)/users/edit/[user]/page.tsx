'use client'

import { ParamsType } from "@/types";
import useUser from "./hooks/useUser";
import { use } from "react";
import { Button } from "@heroui/react";
import UserInformation from "./userInformation";
import { UserRoles } from "./userRoles";
import UserAssignations from "./userAssignations";

export default function EditUser({ params }: ParamsType<"user">) {
    const { user } = use(params);
    const { userData } = useUser(user);

    return (
        <div className="h-full">
            <div className="grid grid-cols-6">
                <div className="col-span-5" >
                    <h2 className="font-bold text-2xl">Miguel Zapara Herrero</h2>
                    <span className="text-sm text-gray-500" >Información de usuario, modules y roles adignados.</span>
                </div>
                <div className="col-span-1">
                    <Button className="rounded-md px-8 py-5" >Guardar</Button>
                </div>
            </div>
            <div className="grid grid-cols-2 h-full">
                <div className="col-span-1 h-[calc(100%-60px)]">
                    <UserInformation {...userData} />
                    <UserRoles />
                </div>
                <div className="col-span-1 m-5 p-10 rounded-xl bg-white h-[calc(100%-40px)] box-border">
                    <UserAssignations />
                </div>
            </div>
        </div>


    )
}