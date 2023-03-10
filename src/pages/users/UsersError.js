import { useRouteError } from "react-router"
import { Link } from "react-router-dom";
export const UsersError = () => {
    const error = useRouteError();
    return (
        <div>
            <h2>Error</h2>
            <p>{error.data}</p>
            <Link to="/">Back To Home</Link>
        </div>
    );
}