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
  "cowboyHatAccessory.png",
  "haloAccessory.png",
  "noneAccessory.png",
  "brainAccessory.png",
  "crownAccessory.png",
];
const backgroundImages = [
  "blackBackground.png",
  "pinkBackground.png",
  "orangeBackground.png",
  "purpleBackground.png",
];
const headImages = [
  "ghostHead.png",
  "pumpkinHead.png",
  "candyCornHead.png",
  "frankensteinHead.png",
];
const faceImages = [
  "ghostFace.png",
  "pumpkinFace.png",
  "candyCornFace.png",
  "frankensteinFace.png",
];

const randomize = (max) => {
  return Math.floor(Math.random() * max);
};

/**
 * Returns an object of random alpaca parts
 */
const randomImageGenerator = () => {
  const avatarParts = {};
  avatarParts["background"] = background[backgroundImages[randomize(4)]];
  avatarParts["head"] = head[headImages[randomize(4)]];
  avatarParts["face"] = face[faceImages[randomize(4)]];
  avatarParts["accessory"] = accessory[accessoryImages[randomize(4)]];
  return avatarParts;
};

export default randomImageGenerator;
