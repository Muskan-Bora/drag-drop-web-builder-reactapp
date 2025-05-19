import { useState } from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import SideBar from './components/SideBar';
import CanvasArea from './components/CanvasArea';
import ConfigPanel from './components/ConfigPanel';

function App() {
  const [showBuilder, setShowBuilder] = useState(false);
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);

  const addElement = (type) => {
    const newElement = {
      id: Date.now(),
      type,
      content: type === 'text' ? 'Edit me' : type === 'button' ? 'Click Me' : '',
      src: type === 'image' ? 'https://via.placeholder.com/150' : '',
      x: 50, 
      y: 50 + elements.length * 100, 
      styles: {
        width: 'Width (e.g., 150px)',
        height: 'Height (e.g., auto or 100px)',
        border: 'Border (e.g., 1px solid #000)',
        borderRadius: 'Border Radius (e.g., 4px)',
      }
    };
    setElements([...elements, newElement]);
  };

  const updateElement = (updatedElement) => {
    const updated = elements.map(el => {
      if (el.id === updatedElement.id) {
        return {
          ...el,
          ...updatedElement,
          styles: {
            ...el.styles,
            ...updatedElement.styles
          }
        };
      }
      return el;
    });
    setElements(updated);
  };

  const deleteElement = (id) => {
    const updated = elements.filter(el => el.id !== id);
    setElements(updated);
    setSelectedElement(null);
  };


  return (
    <div className="App">
    {!showBuilder ? (
      <HeroSection onStart={() => setShowBuilder(true)} />
    ) : (
      <div className="builder-layout">
        <SideBar onAdd={addElement} />
        <CanvasArea elements={elements} onSelect={setSelectedElement} />
        <ConfigPanel
          selected={selectedElement}
          onUpdate={updateElement}
          onDelete={deleteElement}
        />
      </div>
    )}
  </div>
  );
}

export default App;