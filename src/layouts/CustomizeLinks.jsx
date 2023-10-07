import { useState } from 'react';
import LinkCard from '../components/LinkCard';

// Build the links out like a to do list app

const CustomizeLinks = () => {
  const [links, setLinks] = useState([]);

  const handleAddLink = () => {
    if (links.length < 5) {
      setLinks([...links, { id: links.length + 1, platform: '', url: '' }]);
    } else {
      window.alert('Maximum Links reached');
    }
  };

  const handleRemoveLink = (idToRemove) => {
    setLinks((prevLinks) => prevLinks.filter((link) => link.id !== idToRemove));
  };

  return (
    <>
      <section className='bg-white w-full my-3 p-10 rounded-lg'>
        <h1 className='font-bold text-2xl mb-2'>Customize Your Links</h1>
        <p className='text-gray-500 text-sm mb-8'>
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>

        <button
          className='w-full text-center text-[#633CFF] border border-[#633CFF] p-2 mb-5 rounded-md transition duration-150 hover:text-white hover:bg-[#633CFF]'
          onClick={handleAddLink}
        >
          + Add New Link
        </button>

        {/* <LinkCard /> */}

        {links.map((link, i) => (
          <LinkCard
            id={link.id}
            linkNumber={i + 1}
            handleRemoveLink={() => handleRemoveLink(link.id)}
          />
        ))}
      </section>
    </>
  );
};

export default CustomizeLinks;
