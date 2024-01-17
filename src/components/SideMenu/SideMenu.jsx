import React from 'react';
import Style from '../SideMenu/SideMenu.css';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import { AiFillCopy } from 'react-icons/ai';
import { FaCalendarAlt } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';

const SideMenu = ({ isMenuHide }) => {
  return (
    <menu className={!isMenuHide ? 'expanded-menu' : 'menu'}>
        <>
          <button><FaFileInvoiceDollar /></button>
          <button><AiFillCopy /></button>
          <button><FaCalendarAlt /></button>
          <button><ImProfile /></button>
        </>
    </menu>
  );
};

export default SideMenu;
