import { BrowserRouter, Routes, Route } from "react-router-dom";



// SUPPLIERS
import AddSupplier from "./SUPPLIERS/AddSupplier";
import SupplierList from "./SUPPLIERS/SupplierList";

// CUSTOMER
import Orders from "./Orders";
import ProductCatalog from "./productCatalog";
import Owner from "./LOGIN/owner";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN */}
        <Route path="/" element={<Owner />} />
        <Route path="/customer-login" element={<CustomerLogin />} />
        <Route path="/staff-login" element={<StaffLogin />} />

        {/* DASHBOARD */}
        <Route path="/owner-dashboard" element={<OwnerDashboard />} />
        <Route path="/staff-dashboard" element={<StaffDashboard />} />
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />

        {/* FRIDGE */}
        <Route path="/fridge-products" element={<ProductsList />} />
        <Route path="/temperature" element={<Temperature />} />

        {/* INVENTORY */}
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product" element={<EditProduct />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/stock-details" element={<StockDetails />} />

        {/* SUPPLIERS */}
        <Route path="/add-supplier" element={<AddSupplier />} />
        <Route path="/supplier-list" element={<SupplierList />} />

        {/* CUSTOMER */}
        <Route path="/orders" element={<Orders />} />
        <Route path="/product-catalog" element={<ProductCatalog />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;