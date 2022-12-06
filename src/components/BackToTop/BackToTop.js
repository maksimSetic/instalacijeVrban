import React from "react";
import "./BackToTop.scss"
import { FaChevronUp } from "react-icons/fa"
import { useEffect, useState } from 'react';



  const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);


  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  if(isVisible)  {
    return (
      <div>
        <button
          type='button'
          className="b2topbtn"
          onClick={scrollToTop}
        >
          <FaChevronUp className="faicon" aria-hidden='true' />
        </button>
      </div>
        );
  }
  return(<div></div>)

};

export default BackToTop;