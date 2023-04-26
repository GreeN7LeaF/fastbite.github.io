import React from "react";
import { Outlet } from "react-router-dom";
import { CasherSideBar } from "../../Layout/SideMenu/SideBar";
import { OrderSubHeader } from "../../Layout/Header";

export const OrderManagement = () => {
  return (
    <div id="myMain">
      <div className="content py-3 px-5">
        <div className="title fs-2">Orders</div>
        <OrderSubHeader />
        <Outlet />
      </div>
    </div>
  );
};
