import { Navigate, NavLink, Outlet } from 'react-router-dom';
import './layout.css'
import {useAuth} from '../../store/auth'

function AdminLayout() {
    const {userr} =useAuth()
    console.log("Abhay admin", userr)

    if (isLoading) {
        return <h1>Loading</h1>
    }

    if (!userr.IsAdmin){
        return <Navigate to= "/" />
    }
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
