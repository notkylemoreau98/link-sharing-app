import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopLogo from '../assets/images/logo-devlinks-large.svg';
import LinkImage from '../assets/images/icon-link.svg';
import ProfileDetailsImage from '../assets/images/icon-profile-details-header.svg';

const Header = () => {
  const [isActive, setIsActive] = useState(true);
  const isMobile = useMediaQuery({ query: '(max-width: 607px)' });

  return (
    <header className='flex justify-between items-center p-5 bg-white rounded-lg'>
      {/* Logo */}
      <div className=''>
        <a href='/'>
          <img src={DesktopLogo} alt='DevLinks' />
        </a>
      </div>

      {/* Page Links */}
      <div className='flex space-x-3 justify-center'>
        <button
          className={`flex items-center space-x-1 py-2 px-8 rounded-lg cursor-pointer  ${
            isActive ? 'text-[#633CFF] bg-[#EFEBFF]' : 'hover:bg-slate-500'
          }`}
        >
          <img src={LinkImage} alt='Links' />
          {!isMobile && <p>Links</p>}
        </button>
        <button
          className={`flex items-center space-x-1 py-2 px-5 rounded-lg cursor-pointer ${
            isActive ? 'text-[#633CFF] bg-[#EFEBFF]' : ''
          }`}
        >
          <img src={ProfileDetailsImage} alt='Profile Details' />
          {!isMobile && <p>Profile Details</p>}
        </button>
      </div>

      {/* Preview Mode */}
      <div className='text-[#633CFF] border border-[#633CFF] py-2 px-5 rounded-lg cursor-pointer hover:bg-[#633CFF] hover:text-white'>
        <button>Preview</button>
      </div>
    </header>
  );
};

export default Header;
