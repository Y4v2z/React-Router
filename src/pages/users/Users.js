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
                        <div className="card" key={user.id}>
                            <h3>
                                <i className="fa-solid fa-caret-right"></i>{user.name}
                            </h3>
                            <Link to={user.id.toString()} >
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
    if (res.status === 404) {
        throw new Response("Resource Not Found", { status: 404 })
        // throw new Error("Resource Not Found", { status: 404 })
    }

    return res.json();
}

// export const UsersLoader = () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then(response => response.json())

//     }
