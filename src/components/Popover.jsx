import React, { useState, useRef, useEffect } from 'react';

const Popover = ({ children, content }) => {
  const [isVisible, setIsVisible] = useState(false);
  const popoverRef = useRef(null);
  const triggerRef = useRef(null);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popoverRef.current && 
        !popoverRef.current.contains(event.target) &&
        !triggerRef.current.contains(event.target)
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="popover-container">
      <button
        ref={triggerRef}
        onClick={toggleVisibility}
        className="popover-trigger"
        aria-haspopup="true"
        aria-expanded={isVisible}
        aria-controls="popover-content"
      >
        {children}
      </button>
      {isVisible && (
        <div
          id="popover-content"
          ref={popoverRef}
          className="popover-content"
          role="dialog"
          aria-modal="true"
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Popover;