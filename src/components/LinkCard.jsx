import DragIcon from '../assets/images/icon-drag-and-drop.svg';
import LinkIcon from '../assets/images/icon-link-copied-to-clipboard.svg';
// import GitHubLogo from '../assets/images/icon-github.svg';

const LinkCard = ({ linkNumber, handleRemoveLink }) => {
  return (
    <div className='bg-[#EEEEEE] my-3 p-5 rounded-md'>
      {/* Header */}
      <div className='flex justify-between'>
        <div className='flex flex-1 space-x-3 items-center'>
          <img src={DragIcon} alt='Drag' className='cursor-pointer' />
          <p className='text-sm text-gray-500 font-bold '>Link #{linkNumber}</p>
        </div>

        <button className='text-sm text-gray-500' onClick={handleRemoveLink}>
          Remove
        </button>
      </div>

      {/* Platform */}
      <div className=''>
        <p className='text-xs text-gray-500  mt-3 mb-1 pl-2'>Platform</p>
        <select
          name='platform'
          id='platform'
          className='w-full cursor-pointer py-2 px-3 rounded-md'
        >
          <option value='github' className='flex'>
            {/* <img src={GitHubLogo} alt='Github' /> */}
            <p>Github</p>
          </option>
          <option value='gitlab'>
            <p>Gitlab</p>
          </option>
        </select>
      </div>

      {/* Links */}
      {/* Need to update the placeholder link based on the Platform chosen */}
      <div className=''>
        <p className='text-xs text-gray-500 mt-3 mb-1 pl-2'>Link</p>
        <div className='relative'>
          <img
            src={LinkIcon}
            alt='Link'
            className='absolute left-[9px] top-[10px] bottom-0'
          />
          <input
            type='text'
            placeholder='e.g. https://www.github.com/johnappleseed'
            className='w-full py-2 pl-9 rounded-md'
          />
        </div>
      </div>
    </div>
  );
};

export default LinkCard;
