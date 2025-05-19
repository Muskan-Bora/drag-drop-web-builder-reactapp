import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const ConfigPanel = ({ selected, onUpdate, onDelete }) => {
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    setCurrent(selected);
  }, [selected]);

  if (!current) return <div className="config-panel">Select an element to edit <FontAwesomeIcon icon={faEdit} /></div>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (['width', 'height', 'border', 'borderRadius'].includes(name)) {
      setCurrent({
        ...current,
        styles: {
          ...current.styles,
          [name]: value
        }
      });
    } else {
      setCurrent({ ...current, [name]: value });
    }
  };
  
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCurrent({ ...current, src: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(current);
  };

  const handleDelete = () => {
    onDelete(current.id);
  };

  return (
    <div className="config-panel">
      <h3><FontAwesomeIcon icon={faEdit} /> Edit {current.type}</h3>
      <form onSubmit={handleSubmit}>
        {(current.type === 'text' || current.type === 'button') && (
          <>
            <input
              name="content"
              value={current.content}
              onChange={handleChange}
              placeholder="Content"
            />

            <input
              name="width"
              value={current.styles?.width || ''}
              // defaultValue={current.styles?.width}
              onChange={(e) => setCurrent({
                ...current,
                styles: { ...current.styles, width: e.target.value }
              })}
              placeholder="Width (e.g., 150px)"
            />

            <input
              name="height"
              value={current.styles?.height || ''}
              onChange={(e) => setCurrent({
                ...current,
                styles: { ...current.styles, height: e.target.value }
              })}
              placeholder="Height (e.g., auto or 100px)"
            />

            <input
              name="border"
              value={current.styles?.border || ''}
              onChange={(e) => setCurrent({
                ...current,
                styles: { ...current.styles, border: e.target.value }
              })}
              placeholder="Border (e.g., 1px solid #000)"
            />

            <input
              name="borderRadius"
              value={current.styles?.borderRadius || ''}
              onChange={(e) => setCurrent({
                ...current,
                styles: { ...current.styles, borderRadius: e.target.value }
              })}
              placeholder="Border Radius (e.g., 4px)"
            />
          </>
        )}

        {current.type === 'image' && (
          <>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ marginBottom: '10px' }}
            />

            <input
              name="width"
              value={current.styles?.width || ''}
              onChange={(e) => setCurrent({
                ...current,
                styles: { ...current.styles, width: e.target.value }
              })}
              placeholder="Width (e.g., 150px)"
            />

            <input
              name="height"
              value={current.styles?.height || ''}
              onChange={(e) => setCurrent({
                ...current,
                styles: { ...current.styles, height: e.target.value }
              })}
              placeholder="Height (e.g., auto or 100px)"
            />

            <input
              name="border"
              value={current.styles?.border || ''}
              onChange={(e) => setCurrent({
                ...current,
                styles: { ...current.styles, border: e.target.value }
              })}
              placeholder="Border (e.g., 1px solid #000)"
            />

            <input
              name="borderRadius"
              value={current.styles?.borderRadius || ''}
              onChange={(e) => setCurrent({
                ...current,
                styles: { ...current.styles, borderRadius: e.target.value }
              })}
              placeholder="Border Radius (e.g., 4px)"
            />
          </>
        )}

        <button type="submit" className='update-btn'>Update <FontAwesomeIcon icon={faEdit} /></button>
        <button type="button" onClick={handleDelete} className='delete-btn'>
          Delete <FontAwesomeIcon icon={faTrash} />
        </button>
      </form>
    </div>
  );
};

export default ConfigPanel;