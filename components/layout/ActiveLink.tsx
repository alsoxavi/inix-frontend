'use client'
import Link from "next/link"
import { usePathname } from "next/navigation";

type ActiveLinkType = {
    title: string,
    logo?: string,
    href: string
}

function ActiveLink({
    title,
    logo,
    href
}: ActiveLinkType) {
    const pathname = usePathname();
    const isActive = pathname === href
    return (
        <Link className={`link p-3.5 m-0.5 rounded-lg hover:bg-[#197FE6]/[.1] w-[100%] ${isActive && 'bg-[#197FE6]/[.2] hover:bg-[#197FE6]/[.2]'}`} href={href}>
            {!!logo && <img alt="" src={logo} />}<span className="ml-5">{title}</span>
        </Link>
    )
}

export default ActiveLink