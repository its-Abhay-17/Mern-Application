import { NavLink, Outlet } from 'react-router-dom';
import './layout.css'

function AdminLayout() {
    return (
        <div className="admin-layout">
            <h1>Admin Dashboard</h1>
            <div className="admin-container">
                <aside className="sidebar">
                    <ul>
                        <li><NavLink to="/admin/users">Users</NavLink></li>
                        <li><NavLink to="/admin/contacts">Contacts</NavLink></li>
                    </ul>
                </aside>
                <main className="content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default AdminLayout;
