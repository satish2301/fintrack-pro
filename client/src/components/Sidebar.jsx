import React from 'react'
import Logo from "../static/assets/bull.png";
import { NavLink } from 'react-router-dom';
import WebRoutes from '../routes';
const Sidebar = () => {
  return (
    <div className='w-[150px] fixed top-0 left-0 h-full bg-white'>
      <div className='logo text-center'>
        <img src={Logo} alt="Logo" width={30} className=" mx-auto" />
        <p className='text-[14px] font-bold text-gray-800'>FinTrack Pro</p>
      </div>
      <ul className='mt-2 pl-4'>
        <li className='mb-5'>
          <NavLink to={WebRoutes.DASHBOARD} className={({ isActive }) => (isActive ? 'shadow-lg text-[#2E2E2E] font-bold p-3 pr-10 transition ease-in duration-200  bg-[#00B894] cursor-pointer rounded-tl-[20px] rounded-bl-[20px]' : 'p-3 pr-10 text-[#2E2E2E] font-bold hover:bg-[#00B894] cursor-pointer rounded-tl-[20px] rounded-bl-[20px]')}>
            Dashboard
          </NavLink>
        </li>
        <li className='mb-5 '>
          <NavLink to={WebRoutes.TRANSACTION} className={({ isActive }) => (isActive ? 'shadow-lg text-[#2E2E2E] font-bold p-3 pr-6  bg-[#00B894] cursor-pointer rounded-tl-[20px] rounded-bl-[20px]' : 'p-3 pr-9 text-[#2E2E2E] font-bold hover:bg-[#00B894] cursor-pointer rounded-tl-[20px] rounded-bl-[20px]')}>
            Transactions
          </NavLink>
        </li>

      </ul>

    </div>
  )
}

export default Sidebar