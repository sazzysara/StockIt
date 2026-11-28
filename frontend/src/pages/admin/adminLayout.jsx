import { Link, Outlet } from "react-router-dom";

function Admin() {
    return ( 
        <div>
            <p>welcome Admin!</p>
            <nav>
                <Link to={"/admin/admindashboard"}>Dashboard</Link>
                <Link to={"/admin/supplierdetails"}>Supplier Details</Link>
                <br></br>
                <Link to={"/admin/adminsettings"}>Settings</Link>
                <br></br>
                <Link to={"/admin/stockdetails"}>Stock Details</Link>
                <br></br>
                <Link to={"/admin/employeedetails"}>Employee Details</Link>
            </nav>
        <Outlet/>
        </div>
     );
}

export default Admin;