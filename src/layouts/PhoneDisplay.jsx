import PhoneLinkItem from '../components/PhoneLinkItem';

import Phone from '../assets/images/illustration-phone-mockup.svg';
import GithubLogo from '../assets/images/icon-github.svg';

const PhoneDisplay = () => {
  const links = [
    {
      id: '1',
      platform: 'Github',
      platformLink: 'https://github.com/',
      bgColor: '#000',
      platformLogo: `${GithubLogo}`,
    },
  ];

  return (
    <div className='relative'>
      <img src={Phone} alt='Phone Placeholder' className='block mx-auto' />

      {/* Links */}
      {links.map((link) => (
        <PhoneLinkItem
          key={link.id}
          platform={link.platform}
          bgColor={link.bgColor}
          platformLogo={link.platformLogo}
          link={link.platformLink}
        />
      ))}
    </div>
  );
};

export default PhoneDisplay;
