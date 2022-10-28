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
import defaultAccessory from "../images/accessories/haloAccessory.png";

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
          <p className="text-md font-Helvetica h-full flex items-center flex-col justify-center max-w-2xl">
            <span className="">
              There’s nothing small about being haunted on Halloween. The ghosts
              come out, the zombies resurface, the night is only lit up by the
              carved faces of perfectly plump pumpkins.
              <br></br>
              <br></br>
              Boo! You’ve officially been haunted by the world of Halloween
              avatars. Now, don’t be scared. We’re actually here to give your
              profile pic a spooky facelift. Literally. The creators of Haunted
              Avatars (that’s us, hi!) live for the ghosts, ghouls, and goblins,
              and want to give you the opportunity to play a cute trick on your
              co-workers and friends by changing your{" "}
              <span className="border-b border-gray-300 hover:border-[#464EB8] hover:text-[#464EB8] cursor-pointer">
                Teams
              </span>
              ,{" "}
              <span className="border-b border-gray-300 hover:border-[#E01E5A] hover:text-[#E01E5A] cursor-pointer">
                Slack
              </span>
              ,{" "}
              <span className="border-b border-gray-300 hover:border-[#C13584] hover:text-[#C13584] cursor-pointer">
                Insta
              </span>
              ,{" "}
              <span className="border-b border-gray-300 hover:border-[#25F4EE] hover:text-[#25F4EE] cursor-pointer">
                TikTok
              </span>
              , or whatever profile pic to our one-of-a-kind Halloween avatar.
              <br></br>
              <br></br>
              <span className="font-HelveticaBold">
                Here’s how it works:
              </span>{" "}
              We put our heads together to curate some frightfully unique
              combinations. All you have to do is select the{" "}
              <button
                onClick={getRandomImage}
                className="bg-gray-200 rounded-full px-2 py-1 text-sm hover:bg-black hover:text-white cursor-pointer"
              >
                Random
              </button>{" "}
              button, and pray that the Haunted Avatar gods are on your side to
              give you a sweet image mix. Once you’re happy with your Haunted
              Avatar, select{" "}
              <button
                onClick={downloadImage}
                className="bg-gray-200 rounded-full px-2 py-1 text-sm hover:bg-black hover:text-white cursor-pointer"
              >
                Download
              </button>{" "}
              to export it as a PNG. From there, it’s up to you to upload and
              share however you want! We live for the holiday that celebrates
              the dead, even in the simplest way possible.
              <br></br>
              <br></br>
              So, make Haunted Avatars the official Halloween avatar, even on
              the off season.
            </span>
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
