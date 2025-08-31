import { Outlet } from 'react-router-dom';

function AdminLayout() {
    return (
        <div>
    <h1>Admin Dashboard</h1>
    <header>
        <div className="container">
     <ul>
         <NavLink to="/contact"><li>Contact</li></NavLink>
         <NavLink to="/service"><li>Service</li></NavLink>
      </ul>
    </div>
        </header>
            <Outlet />
        </div>
    );
}

export default AdminLayout;
