import { NavLink, Outlet } from 'react-router-dom';
import './layout.css'

function AdminLayout() {
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <header>
                <div className="container">
                    <ul>
                        <NavLink to="/admin/users"><li>User</li></NavLink>
                        <NavLink to="/admin/contacts"><li>Contact</li></NavLink>
                    </ul>
                </div>
            </header>
            <Outlet />
        </div>
    );
}

export default AdminLayout;
