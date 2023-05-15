import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav className="bg-white">
            <div className="container mx-auto">
                <div className="relative flex items-center h-24">
                    <div className="flex items-center">
                        <NavLink to="/">
                            <img src="assets/Logo/logo.png" alt="Mura" />
                        </NavLink>
                    </div>
                    <div className="md:block p-1">
                        <div className="ml-4 flex items-center">
                        <NavLink
                            to="/about"
                            className="text-{2F2F2F} px-3 py-2 rounded-md text-normal font-weight-500"
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/faq"
                            className="text-{2F2F2F} px-3 py-2 rounded-md text-base font-weight-500"
                        >
                            FAQ
                        </NavLink>
                        <NavLink
                            to="/careers"
                            className="text-{2F2F2F} px-3 py-2 rounded-md text-base font-weight-500"
                        >
                            CAREERS
                        </NavLink>
                        <NavLink
                            to="/news"
                            className="text-{2F2F2F} px-3 py-2 rounded-md text-base font-weight-500"
                        >
                            NEWS
                        </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            </nav>
    )
}

export default Header;