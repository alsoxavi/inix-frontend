import ContentLayout from "@/components/layout/ContentDropdownMenu";
import Session from "../../components/layout/session";
import { JSX } from "react";
import ActiveLink from "@/components/layout/ActiveLink";

export default function MainLayout({ children }: { children: JSX.Element }) {
    return (
        <div className="grid grid-cols-6">
            <div className="grid grid-rows-2 h-[100vh]">
                <nav className="row-span-1 col-span-1 p-5">
                    <div className="my-4 flex items-center text-[#475569]">
                        <img width={75} className="ml-1" src="/logo.svg" />
                        <span className="font-bold text-lg ml-1" >Qalla</span>
                    </div>
                    <div>
                        <ActiveLink
                            href="/dashboard"
                            logo="/dashboard-logo.svg"
                            title="Dashboard"
                        />
                        <ActiveLink
                            href="/modules"
                            logo="/book-logo.svg"
                            title="Modulos"
                        />
                        <span className="font-semibold text-gray-300">Administración</span>
                        <ContentLayout />
                        <ActiveLink
                            href="/users"
                            logo="/user-logo.svg"
                            title="Usuarios"
                        />
                        <ActiveLink
                            href="/roles"
                            logo="/user-logo.svg"
                            title="Roles"
                        />
                    </div>  
                </nav>
                <div className="row-span-1 flex flex-col justify-end">
                    <Session />
                </div>
            </div>
            <section className="col-start-2 col-span-5 bg-[var(--color-body-bg)] h-[100vh] p-15">
                {children}
            </section>
        </div>
    );
};