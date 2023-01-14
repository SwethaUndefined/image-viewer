import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/Context';

import "./ImageViewer.css";


const ImageViewer = () => { 
    const{image,toggle} = useContext(GlobalContext);
  return (
    <div className={`viewer-container ${!toggle ? "" :"active"}`} >
        <img className='view-img' src={image} alt='img Not Found'/>
    </div>
  )
}

export default ImageViewer