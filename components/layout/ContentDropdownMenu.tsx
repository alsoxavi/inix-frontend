'use client'
import { Accordion } from "@heroui/react"
import Link from "next/link";
import { useState } from "react";
import ActiveLink from "./ActiveLink";

function ContentLayout() {
    const [llaveAbierta, setLlaveAbierta] = useState(new Set(["1"]));

    return (
        <Accordion className="w-full max-w-md">
            <Accordion.Item>
                <Accordion.Heading className="mt-1 rounded-lg hover:bg-[#197FE6]/[.1] w-[100%]">
                    <Accordion.Trigger>
                        <div className="flex items-center">
                            <img alt="" src="/book-logo.svg" /> <span className="ml-5">Contenido</span>
                        </div>
                    </Accordion.Trigger>
                </Accordion.Heading>
                <Accordion.Panel>
                    <Accordion.Body>
                        <div className="flex flex-col" >
                            <ActiveLink 
                                href="/content/modules"
                                title="Modulos"
                            />
                            <ActiveLink 
                                href="/content/routes"
                                title="Rutas"
                            />
                        </div>
                    </Accordion.Body>
                </Accordion.Panel>
            </Accordion.Item>
        </Accordion>
    )
}

export default ContentLayout