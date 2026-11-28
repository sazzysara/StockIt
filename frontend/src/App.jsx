
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Alerts from "./pages/alerts";
import Admin from "./pages/admin/adminLayout";
import AdminDashboard from "./pages/admin/admindashboard";
import AdminSettings from "./pages/admin/adminSettings";
import SupplierDetails from "./pages/admin/supplierDetails";
import StockDetails from "./pages/admin/stockdetails";
import EmployeeDetails from "./pages/admin/employeedetails";
import Supplier from "./pages/supplier/supplierLayout";
import SupplierDashboard from "./pages/supplier/supplierDashboard";
import Exports from "./pages/supplier/exportstocks";
import Imports from "./pages/supplier/Importstocks";
import SupplierSettings from "./pages/supplier/suppliersettings";
import Dashboard from "./pages/dashboard";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route  path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route  path="/alerts" element={<Alerts/>}/>
        <Route path="/admin" element={<Admin/>} >
            <Route path="adminDashboard" element={<AdminDashboard/>} />
            <Route path="adminSettings" element={<AdminSettings/>} />
            <Route path="supplierdetails" element={<SupplierDetails/>} />
            <Route path="stockdetails" element={<StockDetails/>} />
            <Route path="employeedetails" element={<EmployeeDetails/>} />
        </Route>
        <Route path="/supplier" element={<Supplier/>} >
            <Route path="supplierDashboard" element={<SupplierDashboard/>} />
            <Route path="supplierSettings" element={<SupplierSettings/>} />
            <Route path="exports" element={<Exports/>} />
            <Route path="imports" element={<Imports/>} />
        </Route>      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
