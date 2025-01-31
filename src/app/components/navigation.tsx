"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
    const pathName = usePathname();
    const linkStyle = "rounded-md bg:transparent mx-2 p-2 transition duration-[0.1s,0.5s] ease-in-out hover:bg-amber-50/50"
    return (
        <nav>
            <Link href="/" 
            className={pathName === "/" ? "font-bold " + linkStyle : linkStyle}>
                Home
            </Link>
            <Link href="/api/exercises" 
            className={pathName === "/api/exercises" ? "font-bold " + linkStyle : linkStyle}>
                Exercises API
            </Link>
        </nav>
    )
}