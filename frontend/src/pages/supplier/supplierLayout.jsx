import { Link, Outlet } from "react-router-dom";

function Supplier() {
    return ( 
        <div>
            <nav>
                <Link to={"/supplier/supplierdashboard"}>Dashboard</Link>
                <br></br>
                <Link to={"/supplier/exports"}>Exports</Link>
                <br></br>
                <Link to={"/supplier/imports"}>Imports</Link>
                <br></br>
                <Link to={"/supplier/suppliersettings"}>Settings</Link>
            </nav>
        <Outlet/>
        </div>
     );
}

export default Supplier;