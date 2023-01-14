import { createContext, useState } from "react";

export const GlobalContext = createContext({
  image:
    "https://res.cloudinary.com/dn5hyvevi/image/upload/v1673630995/adam-kool-ndN00KmbJ1c-unsplash_s9uelh.jpg",
  setImage: () => {},
  toggle : false,
  setToggle : () => {}
});

export const ContextWrapper = ({ children }) => {
  const [image, setImage] = useState(
    "https://res.cloudinary.com/dn5hyvevi/image/upload/v1673630995/adam-kool-ndN00KmbJ1c-unsplash_s9uelh.jpg"
  );
  const[toggle,setToggle] = useState(false);
  return (
    <GlobalContext.Provider
      value={{
        image,
        setImage,
        toggle,
        setToggle
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
