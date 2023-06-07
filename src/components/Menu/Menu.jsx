import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function MenuComponent() {
  const [menuOpen, setMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menuElement = document.getElementById('dropdownMenu');
      if (menuElement && !menuElement.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative text-{2F2F2F} px-3 py-2 rounded-md text-normal font-weight-500">
      <div onClick={onToggleMenu} className="cursor-pointer flex flex-row items-center justify-center">
        <p className='text-black hover:text-[#CBBAAB]'>MENU</p>
        <img className="w-3 h-3 pl-1" src="assets/Logo/menu.png" alt="Menu" />
      </div>
      {menuOpen && (
        <ul id="dropdownMenu" className="absolute z-10 mt-2 py-2 w-40 lg:bg-transparent bg-white rounded-md">
          <li><NavLink to="/cafe" onClick={() => setMenuOpen(false)} className="block hover:text-[#CBBAAB] py-2 lg:pl-0 pl-3">CAFE MENU</NavLink></li>
          <li><NavLink to="/dinner" onClick={() => setMenuOpen(false)} className="block hover:text-[#CBBAAB] py-2 lg:pl-0 pl-3">DINNER MENU</NavLink></li>
          <li><NavLink to="/bar" onClick={() => setMenuOpen(false)} className="block hover:text-[#CBBAAB] py-2 lg:pl-0 pl-3">BAR MENU</NavLink></li>
        </ul>
      )}
    </div>
  );
}

export default MenuComponent;
