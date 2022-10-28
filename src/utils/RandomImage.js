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
  "beanieAccessory.png",
  "flowerAccessory.png",
  "hellAccessory.png",
];
const backgroundImages = [
  "blackBackground.png",
  "pinkBackground.png",
  "orangeBackground.png",
  "purpleBackground.png",
  "redBackground.png",
  "blueBackground.png",
  "royalBackground.png",
  "burntBackground.png",
  "navyBackground.png",
];
const headImages = [
  "ghostHead.png",
  "pumpkinHead.png",
  "candyCornHead.png",
  "frankensteinHead.png",
  "alienHead.png",
  "skeletonHead.png",
  "vampireHead.png",
  "devilHead.png",
];
const faceImages = [
  "ghostFace.png",
  "pumpkinFace.png",
  "candyCornFace.png",
  "frankensteinFace.png",
  "alienFace.png",
  "skeletonFace.png",
  "vampireFace.png",
  "devilFace.png",
];

const randomize = (max) => {
  return Math.floor(Math.random() * max);
};

/**
 * Returns an object of random alpaca parts
 */
const randomImageGenerator = () => {
  const avatarParts = {};
  avatarParts["background"] = background[backgroundImages[randomize(9)]];
  avatarParts["head"] = head[headImages[randomize(8)]];
  avatarParts["face"] = face[faceImages[randomize(8)]];
  avatarParts["accessory"] = accessory[accessoryImages[randomize(8)]];
  return avatarParts;
};

export default randomImageGenerator;
