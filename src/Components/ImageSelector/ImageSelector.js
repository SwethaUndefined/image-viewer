import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext, useState } from "react";
import { GlobalContext } from "../../Context/Context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import "./ImageSelector.css";

const ImageSelector = () => {
  const images = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dn5hyvevi/image/upload/v1673630995/adam-kool-ndN00KmbJ1c-unsplash_s9uelh.jpg",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dn5hyvevi/image/upload/v1673674678/hendrik-cornelissen--qrcOR33ErA-unsplash_cilm29.jpg",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dn5hyvevi/image/upload/v1673674674/v2osk-1Z2niiBPg5A-unsplash_nifoey.jpg",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dn5hyvevi/image/upload/v1673674668/dawid-zawila--G3rw6Y02D0-unsplash_hxr0mk.jpg",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dn5hyvevi/image/upload/v1673674666/lukasz-szmigiel-jFCViYFYcus-unsplash_dzq3j0.jpg",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/dn5hyvevi/image/upload/v1673674658/claudio-testa--SO3JtE3gZo-unsplash_uwmktr.jpg",
    },
    {
      id: 7,
      image:
        "https://res.cloudinary.com/dn5hyvevi/image/upload/v1673674661/kalen-emsley-Bkci_8qcdvQ-unsplash_nslf7c.jpg",
    },
    {
      id: 8,
      image:
      "https://res.cloudinary.com/dn5hyvevi/image/upload/v1673674660/federico-respini-sYffw0LNr7s-unsplash_yvqvay.jpg"
    },
    {
      id: 9,
      image:
        "https://res.cloudinary.com/dn5hyvevi/image/upload/v1673674653/eberhard-grossgasteiger-y2azHvupCVo-unsplash_gr9ulv.jpg",
    },
    {
      id: 10,
      image:
        "https://res.cloudinary.com/dn5hyvevi/image/upload/v1673674646/kalen-emsley-_LuLiJc1cdo-unsplash_i3ybuq.jpg",
    },
    {
      id : 11,
      image :
      "https://res.cloudinary.com/dn5hyvevi/image/upload/v1673674644/mohamed-nohassi-odxB5oIG_iA-unsplash_zeoyal.jpg"
    },
    {
      id : 12,
      image :
      "https://res.cloudinary.com/dn5hyvevi/image/upload/v1673674636/jay-mantri-TFyi0QOx08c-unsplash_mfgmx0.jpg"
    }

  ];
  const[trackActiveImage,setTrackActiveImage] = useState(1);
  const{setImage,setToggle,toggle} = useContext(GlobalContext);

  const setActive = (e)=>{
    setTrackActiveImage(e.target.id);
    document.getElementById(e.target.id).classList.add("increase-opacity");
    document.getElementById(trackActiveImage).classList.remove("increase-opacity");
  }

    return (
    <div className={`selector-container ${!toggle ? "": "inactive"}`} >
    <FontAwesomeIcon icon={faAngleDown} className={`toggle-btn ${toggle ? "rotateDown" : "rotateUp"}`} onClick={()=>{
        setToggle(!toggle)
    }}></FontAwesomeIcon>
      {images.map((img) => {
        return (
          <img  onClick={(e)=>{
            setImage(img.image);
            setActive(e);
          }}
            key={img.id}
            src={img.image}
            alt="img Not Found"
            className={`selector-img ${img.id===1 ? "increase-opacity" : ""}`}
            id={img.id}
          ></img> 
        );
      })}
    </div>
  );
};

export default ImageSelector;
