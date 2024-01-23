import React, { useState, useEffect } from 'react';
import '../Sidemenu/Sidemenu.css';
import { MdAccountBalanceWallet } from "react-icons/md";
import { MdAccountBalance } from "react-icons/md";
import { IoBarChartSharp } from "react-icons/io5";
import { FaMoneyBillTransfer } from "react-icons/fa6";

const Sidemenu = ({ menu }) => {
  return (
    <sidebar className={menu ? "menu-open" : "menu-closed"}>
      <ul>
        {menu ? (
          <>
          <button><li><MdAccountBalanceWallet /> Account</li></button>
            <button><li><FaMoneyBillTransfer />Invoices</li></button>
            <button><li><MdAccountBalance /> Bank</li></button>
            <button><li><IoBarChartSharp />Charts</li></button>
          </>
        ) : (
          <>
            <button><li><MdAccountBalanceWallet /></li></button>
            <button><li><FaMoneyBillTransfer /></li></button>
            <button><li><MdAccountBalance /></li></button>
            <button><li><IoBarChartSharp /></li></button>
          </>
        )}
      </ul>
    </sidebar>
  );
}

export default Sidemenu;


