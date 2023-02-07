import Link from "next/link"
import { useEffect, useState } from "react"

export default function Header() {
    const [isExpanded, setExpanded] = useState(false)

    return (
        <>
            <nav className="flex justify-between mt-8 mx-12 navbar">
                <Link href="/" className="text-4xl md:text-6xl">d . r . i . p .</Link>
                <div className="flex md:justify-end items-end md:w-48">
                    <ul className={`md:flex flex-row nav-menu ${isExpanded ? "flex flex-col ml-0 absolute top-16 right-16 bg-blue-100" : "hidden"}`}>
                        <a href="" className="">
                            <li className="flex justify-center">
                                about
                            </li>
                        </a>
                        <a>
                            <li className="ml-4 flex justify-center">
                                another item
                            </li>
                        </a>
                    </ul>
                    <div
                        className="md:hidden"
                        onClick={() => setExpanded(!isExpanded)}
                    >
                        <span className="material-symbols-outlined">menu</span>
                    </div>
                </div>
            </nav >
        </>
    )
}