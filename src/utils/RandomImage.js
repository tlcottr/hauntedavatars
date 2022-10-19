import importImages from "./ImportImages";

const accessory = importImages(
  require.context("../images/accessories", false, /\.png/)
);
const background = importImages(
  require.context("../images/background", false, /\.png/)
);
const head = importImages(require.context("../images/head", false, /\.png/));
const face = importImages(require.context("../images/face", false, /\.png/));

const accessoryImages = [
  "ghostAccessory.png",
  "pumpkinAccessory.png",
  "noneAccessory.png",
];
const backgroundImages = ["blackBackground.png", "pinkBackground.png"];
const headImages = ["ghostHead.png", "pumpkinHead.png"];
const faceImages = ["ghostFace.png", "pumpkinFace.png"];

const randomize = (max) => {
  return Math.floor(Math.random() * max);
};

/**
 * Returns an object of random alpaca parts
 */
const randomImageGenerator = () => {
  const avatarParts = {};
  avatarParts["background"] = background[backgroundImages[randomize(2)]];
  avatarParts["head"] = head[headImages[randomize(2)]];
  avatarParts["face"] = face[faceImages[randomize(2)]];
  avatarParts["accessory"] = accessory[accessoryImages[randomize(3)]];
  return avatarParts;
};

export default randomImageGenerator;
