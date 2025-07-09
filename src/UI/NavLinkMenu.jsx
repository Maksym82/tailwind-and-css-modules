import { NavLink } from "react-router-dom";

export default function NavMenuLink({ to, children }) {
    return (
        <NavLink className="text-gray-600" to={to}>
            {children}
        </NavLink>
    )
}