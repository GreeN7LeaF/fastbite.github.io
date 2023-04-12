import React, { useState, StrictMode } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import AdminHeader from "./components/Admin/Admin_Header/AdminHeader";
import AdminSideBar from "./components/Admin/Admin_Header/AdminSideBar";
import Production from "./components/Admin/Production/Production";

// casher
import OrderPage from "./components/pages/Casher/MakeOrderPage";
import { MenuManagementPage } from "./components/pages/Casher/MenuManagementPage";
import { OrderManagement } from "./components/pages/Casher/OrdersPage";
import { OrderHistory } from "./components/pages/Casher/OrderHistory";
import { OrderProcessing } from "./components/pages/Casher/OrderProcessing";
import { OrderCompleted } from "./components/pages/Casher/OrderCompleted";
import { LoginPage } from "./components/pages/Auth/LoginPage";
// admin
import { FoodList } from "./components/pages/FoodList";

import "./css/plugins.css";
import Admin from "./components/Admin/Admin";
import Promotion from "./components/Admin/Promotion/Promotion";
import Catagories from "./components/Admin/Catagories/Catagories";
import Supplier from "./components/Admin/Supplier/Supplier";
import Staff from "./components/Admin/Staff/Staff";

function App() {
  const pathname = window.location.pathname;
  let flag = false;
  if (pathname == "/admin") {
    flag = true;
  }
  return (
    <StrictMode>
      <Router>
        {pathname.includes("/admin") ? <AdminHeader /> : <NavBar />}
        {pathname.includes("/admin") ? <AdminSideBar /> : ""}
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route path="/order" element={<OrderPage />} />
          <Route path="/menu" element={<MenuManagementPage />} />
          <Route path="/orders" element={<OrderManagement />}>
            <Route path="/orders/all" element={<OrderHistory />} />
            <Route path="/orders/processing" element={<OrderProcessing />} />
            <Route path="/orders/completed" element={<OrderCompleted />} />
          </Route>

          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/admin/production" element={<Production />}></Route>
          <Route path="/admin/promotion" element={<Promotion />}></Route>
          <Route path="/admin/catagories" element={<Catagories />}></Route>
          <Route path="/admin/supplier" element={<Supplier />}></Route>
          <Route path="/admin/staff" element={<Staff />}></Route>
          <Route path="/admin/food" element={<FoodList />} />
        </Routes>
      </Router>
    </StrictMode>
  );
}

export default App;
