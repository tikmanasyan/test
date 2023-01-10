import { useState } from "react";
import "./Box.css";
import images from "./../../img/index";//shat nkarneri kirarum ES6
import img1 from "./../../img/b.jpg";//mi nkari depqum ES6

const Box = () => {
    const [show, setShow] = useState(true);
    // const img1 = require("./../../img/b.jpg");//mi nkari depqum ES5
    // console.log(images);
    return (
        <div>
            {show && <h1>Hello</h1>}
            <img src={images.img2} /> 
            <img src={img1} /> 
        </div>
    );
}

export default Box;