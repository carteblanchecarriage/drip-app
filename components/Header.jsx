import Link from "next/link"

export default function Header() {
    return (
        <>
            <nav className="flex justify-between mt-8 mx-12 navbar">
                <Link href="/" className="text-6xl">d . r . i . p .</Link>
                <div className="" id="navbarGroup">
                    <ul className="md:flex nav-menu" id="nav-menu">
                        {/*                         <a href="index.html" className="nav-link">
                            <li className="nav-item">
                                home
                            </li>
                        </a>
                        <a href="references.html" className="nav-link">
                            <li className="nav-item">
                                reference projects
                            </li>
                        </a>
                        <a href="rain.html" className="nav-link">
                            <li className="nav-item">
                                rain
                            </li>
                        </a> */}
                        <a href="" className="nav-link">
                            <li className="nav-item">
                                about
                            </li>
                        </a>
                    </ul>

                    <div className="hamburger" className="active" id="hamburger">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>
            </nav>
        </>
    )
}