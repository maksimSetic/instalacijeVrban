import React from "react";
import $ from "jquery"
import "./BackToTop.scss"
import { FaChevronUp } from "react-icons/fa"

var btn = $('#button');


btn.on('click', function(e) {
  $('html, body').animate({scrollTop:0}, '300');
});

const BackToTop = () => {
    return(<a id="button"></a>)
}

export default BackToTop;