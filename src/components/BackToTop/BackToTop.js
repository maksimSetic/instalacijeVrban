import React from "react";
import "./BackToTop.scss"
import { FaChevronUp } from "react-icons/fa"
import { useEffect, useState } from 'react';



  const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <div  style={{ display: "fixed"}}>
      <button
        type='button'
        className="b2topbtn"
        onClick={scrollToTop}
      >
        <FaChevronUp className="faicon" aria-hidden='true' />
      </button>
    </div>
  );
};

export default BackToTop;