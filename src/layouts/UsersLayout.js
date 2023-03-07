import { Outlet } from "react-router";

const UsersLayout = () => {
    return (
        <div className="users-layout">
            <h1>Users</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, in illo alias deserunt ad possimus voluptas hic quia ipsum doloremque at eius laboriosam officiis ratione eaque vel exercitationem! Dolorum, veritatis? Laboriosam amet totam vitae repudiandae nisi quidem enim velit, consectetur libero autem quasi accusamus, sed possimus quia ex corrupti quam!</p>
            <Outlet />
        </div>
    );
}
export default UsersLayout;