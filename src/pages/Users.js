import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";

export const Users = () => {
    const users = useLoaderData()
    return (
        <div className="users">
            <h1>User Details</h1>

            {
                users.map((user) => {
                    return (
                        <div className="card">
                            <h3>
                                <i className="fa-solid fa-caret-right"></i>{user.name}
                            </h3>
                            <Link to={user.id.toString()} key={user.id}>
                                <i className="fa-regular fa-square-caret-right"></i>
                            </Link>
                        </div>
                    )
                })}
        </div>
    );
};

export const UsersLoader = async () => {

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
}

// export const UsersLoader = () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then(response => response.json())

//     }
