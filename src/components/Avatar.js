import React, { useState, useMemo } from "react";

import mergeImages from "merge-images";
import randomImageGenerator from "../utils/RandomImage";
import Logo from "../components/Logo.js";
import Credits from "../components/Credits.js";

// components

import "../css/Avatar.scss";

// default avatar parts
import pinkBackground from "../images/background/pinkBackground.png";
import defaultHead from "../images/head/pumpkinHead.png";
import defaultFace from "../images/face/pumpkinFace.png";
import defaultAccessory from "../images/accessories/pumpkinAccessory.png";

function Avatar(props) {
  const [background, setBackground] = useState(pinkBackground);
  const [head, setHead] = useState(defaultHead);
  const [face, setFace] = useState(defaultFace);
  const [accessory, setAccessory] = useState(defaultAccessory);

  const getRandomImage = () => {
    const avatar = randomImageGenerator();
    setBackground(avatar.background);
    setHead(avatar.head);
    setFace(avatar.face);
    setAccessory(avatar.accessory);
  };

  const downloadImage = () => {
    const avatarImage = document.querySelector("#avatar");
    const link = document.createElement("a");
    link.download = "avatar.png";
    link.href = avatarImage.src;
    link.click();
  };

  useMemo(() => {
    const parts = [
      { src: background },
      { src: head },
      { src: face },
      { src: accessory },
    ];
    mergeImages(parts).then(
      (avatar) => (document.querySelector("#avatar").src = avatar)
    );
  }, [background, head, face, accessory]);

  return (
    <>
      <div className="flex flex-row items-center justify-center mx-auto h-screen">
        <div className="flex flex-col bg-white h-full w-full p-5">
          <Logo />
          <p className="text-md font-Helvetica h-full flex items-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Credits />
        </div>
        <div className="flex flex-col h-full w-full items-center justify-center relative">
          <img id="avatar" alt="avatar" className="w-full h-full" />

          <div className="m-5 absolute bottom-0 right-0">
            <button
              onClick={getRandomImage}
              className="bg-white hover:bg-black hover:text-white text-sm text-black py-1 px-5 rounded-full transition-opacity duration-100 mx-1"
            >
              Random
            </button>
            <button
              onClick={downloadImage}
              className="bg-white hover:bg-black hover:text-white text-sm text-black py-1 px-5 rounded-full transition-opacity duration-100 mx-1"
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Avatar;
