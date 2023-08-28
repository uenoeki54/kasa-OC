import { useState } from 'react';
import { useRef } from 'react';
import './collapse.css';
function Collapse({ title, text, size }) {
  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };
  const contentRef = useRef();
  return (
    <div className="conteneur-collapse">
      <div className={'collapse ' + size}>
        <h2>{title}</h2>
        <i
          className={
            open
              ? 'downwards fa-solid fa-chevron-up'
              : 'upwards fa-solid fa-chevron-up'
          }
          onClick={toggle}
        ></i>
      </div>
      <div
        ref={contentRef}
        style={
          open
            ? { height: contentRef.current.scrollHeight + 'px' }
            : { height: '0px' }
        }
        className={'content ' + size}
      >
        <div className="description">{text}</div>
      </div>
    </div>
  );
}

export default Collapse;
