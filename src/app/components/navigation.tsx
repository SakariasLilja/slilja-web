"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Navigation = () => {
    const pathName = usePathname();
    const navigationClass = (path: string) => pathName === path ? "btn btn-ghost text-xl font-bold" : "btn btn-ghost text-xl"
    
    return (
        <div className="navbar bg-black/30 px-3 py-3">
            <div className="flex-1">
                <a className={navigationClass("/")} href="/">Home</a>
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <Image
                        src="/profile.svg"
                        alt="Profile icon"
                        width={64}
                        height={64}
                        priority={true}
                    />
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                    </li>
                    <li><a href="/login">Login</a></li>
                </ul>
                </div>
            </div>
        </div>
    )
}