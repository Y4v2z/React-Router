import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

const HelpLayout = () => {

    return (
        <div className="help-layout">
            <h2>Help</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, itaque.</p>
            <nav>
                <NavLink to="contact">Contact</NavLink>
                <NavLink to="faq">Faq</NavLink>
            </nav>
            <Outlet />
        </div>
    );
}
export default HelpLayout;

