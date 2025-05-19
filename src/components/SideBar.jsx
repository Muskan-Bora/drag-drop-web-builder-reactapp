import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faFont, faImage, faHandPointer } from '@fortawesome/free-solid-svg-icons';

const SideBar = ({ onAdd }) => {
  return (
    <div className="sidebar">
      <h3><FontAwesomeIcon icon={faPlusSquare} />  Add Elements</h3>
      <button className='sidebar-item' onClick={() => onAdd('text')}><FontAwesomeIcon icon={faFont} /> Add Text</button>
      <button className='sidebar-item' onClick={() => onAdd('image')}><FontAwesomeIcon icon={faImage} /> Add Image</button>
      <button className='sidebar-item' onClick={() => onAdd('button')}><FontAwesomeIcon icon={faHandPointer} /> Add Button</button>
    </div>
  );
};

export default SideBar;
