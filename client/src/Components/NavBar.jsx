import { HiBars3 } from "react-icons/hi2";
import { IoMdSearch } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineCenterFocusWeak } from "react-icons/md";
import { useState } from "react";

const NavBar = () => {
    const [options,setOptions]=useState('hidden')

  return (
    <>
      <header className='bg-gray-700 h-16 w-full px-2 flex justify-between items-center text-gray-400 md:px-4'>
    <span className='cursor-pointer'>
    <HiBars3 size={30}  onClick={()=>setOptions((prev)=>prev==='hidden'?'block':'hidden')} />
     </span>
    <div className='flex justify-center gap-4 items-center'>
    {/* search */}
    <div className='bg-slate-600  rounded-full flex justify-between items-center px-2'>
    <input type="search" className='bg-transparent placeholder:text-xs py-0.5 outline-none text-white' placeholder='Search...' name="" id="" />
    <button><IoMdSearch className=''/></button>
    </div>
    {/* search */}
    {/* nav links */}
<div className='md:flex justify-center items-center gap-4 hidden'>
<MdOutlineCenterFocusWeak size={20}/>
<IoMdNotificationsOutline size={20}/>
<div className='flex items-center justify-center gap-2'>
<img className=" h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
<span className='text-xs'>CRED ADMIN</span>
</div>
<CiSettings size={20}/>
</div>
{/* nav links */}

</div>

</header>
<aside className={`bg-gray-700 ${options} text-gray-300  absolute`}>
    <ul className='flex flex-col'>
    <li className='flex gap-2 hover:bg-slate-500 px-3 py-2 cursor-pointer items-center'><CiSettings size={20}/><span>Settings</span></li>
    <li className='flex gap-2 hover:bg-slate-500 px-3 py-2 cursor-pointer items-center'><IoMdNotificationsOutline size={20}/><span>Notifications</span></li>
    <li className='flex gap-2 hover:bg-slate-500 px-3 py-2 cursor-pointer  items-center'><RxAvatar size={20}/><span>Profile</span></li>
     </ul>
</aside>
    </>
  )
}

export default NavBar
