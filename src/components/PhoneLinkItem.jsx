import { ReactComponent as Arrow } from '../assets/images/icon-arrow-right.svg';

const PhoneLinkItem = ({ platform, link, bgColor, platformLogo }) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className='text-white mx-6 rounded-lg absolute top-[17.4rem] left-[3rem] cursor-pointer'
    >
      <a href={link} target='_blank' rel='noreferrer'>
        <div className='flex justify-between py-[10px] px-5'>
          <div className='flex'>
            <img src={platformLogo} alt={platform} />
            <p>{platform}</p>
          </div>
          <Arrow />
        </div>
      </a>
    </div>
  );
};

export default PhoneLinkItem;
