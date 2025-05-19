import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPuzzlePiece  } from '@fortawesome/free-solid-svg-icons';

const CanvasArea = ({ elements, onSelect }) => {
  return (
    <div
      id="canvas-area"
      className="canvas">
      {elements.length === 0 && (
        <div className="canvas-placeholder">
          Drag and Drop your elements here <FontAwesomeIcon icon={faPuzzlePiece} /> <FontAwesomeIcon icon={faPuzzlePiece} />
        </div>
      )}
    
      {elements.map((el) => (
        <div
          key={el.id}
          onClick={() => onSelect(el)}
          style={{
            position: 'relative', // important: position the wrapper
          }}
        >
          {el.type === 'text' && (
            <div
              className="canvas-element"
              style={{
                ...el.styles
              }}
            >
              {el.content}
            </div>
          )}

          {el.type === 'button' && (
            <button
              className="canvas-element"
              style={{
                ...el.styles
              }}
            >
              {el.content}
            </button>
          )}

          {el.type === 'image' && el.src && (
            <img
              className="canvas-element"
              src={el.src}
              alt="Selected Element"
              style={{
                ...el.styles
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default CanvasArea;