
import { BrowserRouter, Routes, Route } from "react-router-dom";

// LOGIN
import Customer from "./LOGIN/Customer";
import Owner from "./LOGIN/Owner";
import Staff from "./LOGIN/Staff";

// DASHBOARD
import CustomerDashboard from "./DASHBOARD/Customer";
import OwnerDashboard from "./DASHBOARD/Owner";
import StaffDashboard from "./DASHBOARD/Staff";

// CUSTOMER
import ProductCatalog from "./CUSTOMER/productCatalog";

// FRIDGE
import ProductsList from "./FRIDGE/ProductsInFridge";
import Temperature from "./FRIDGE/Temperature";


// SUPPLIERS
import AddSupplier from "./SUPPLIERS/AddSupplier";
import SupplierList from "./SUPPLIERS/SupplierList";

import Orders from "./CUSTOMER/orders";
import AddProduct from "./INVENTORY/addProduct";
import EditProduct from "./INVENTORY/editProduct";
import ProductList from "./INVENTORY/productList";
import StockDetails from "./INVENTORY/stockDetails";
import Register from "./register";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN */}
        <Route path="/" element={<Owner />} />
        <Route path="/customer-login" element={<Customer />} />
        <Route path="/staff-login" element={<Staff />} />
        

        {/* DASHBOARD */}
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />
        <Route path="/owner-dashboard" element={<OwnerDashboard />} />
        <Route path="/staff-dashboard" element={<StaffDashboard />} />

        {/* CUSTOMER */}
        <Route path="/orders" element={<Orders />} />
        <Route path="/product-catalog" element={<ProductCatalog />} />

        {/* FRIDGE */}
        <Route path="/products-In" element={<ProductsIn/>} />
        <Route path="/temperature" element={<Temperature />} />

        {/* INVENTORY */}
        <Route path="/add-product" element={<AddProduct/>} />
        <Route path="/edit-product" element={<EditProduct />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/stock-details" element={<StockDetails />} />

        {/* SUPPLIERS */}
        <Route path="/add-supplier" element={<AddSupplier />} />
        <Route path="/supplier-list" element={<SupplierList />} />

        <Route path="/register" element={<Register />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
