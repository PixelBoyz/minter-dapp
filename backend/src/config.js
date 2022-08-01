require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
<<<<<<< HEAD
const namePrefix = "sword";
const description = "wl pass";
=======
const namePrefix = "Sword";
const description = "WL Pass for NFT Launch";
>>>>>>> 0603cd03e1f8b5dcb43803c4bbd1aa77c1f34c0b
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

const layerConfigurations = [
  {
    growEditionSizeTo: 20,
    layersOrder: [
      { name: "Background" },
      { name: "Sword" },
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 500,
  height: 500,
  smoothing: false,
};

const extraMetadata = {
<<<<<<< HEAD
  external_url: "https://Ankit.com", // Replace with your website or remove this line if you do not have one.
=======
  external_url: "https://mintables.club", // Replace with your website or remove this line if you do not have one.
>>>>>>> 0603cd03e1f8b5dcb43803c4bbd1aa77c1f34c0b
};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 2; // Your API key rate limit
const CHAIN = 'polygon'; // only rinkeby, polygon, or ethereum

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
<<<<<<< HEAD
const CONTRACT_NAME = 'sword';
const CONTRACT_SYMBOL = 'wl';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0x08595894d652a1Ee2bFdCF5914B40f310EB3d352';
const TREASURY_ADDRESS = '0x08595894d652a1Ee2bFdCF5914B40f310EB3d352';
const MAX_SUPPLY = 5; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
=======
const CONTRACT_NAME = 'SWORD';
const CONTRACT_SYMBOL = 'Wl';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0x1FaB081c34Cf9Df25342045A938Cd69c4Ec16236';
const TREASURY_ADDRESS = '0x1FaB081c34Cf9Df25342045A938Cd69c4Ec16236';
const MAX_SUPPLY = 20; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
>>>>>>> 0603cd03e1f8b5dcb43803c4bbd1aa77c1f34c0b
const MINT_PRICE = 0.01; // Minting price per NFT. Rinkeby = ETH, Ethereum = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 1; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
<<<<<<< HEAD
const PUBLIC_MINT_START_DATE = "2022-08-29T11:30:48+00:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = "2022-08-29T11:30:48+00:00"; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 1000; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0x08595894d652a1Ee2bFdCF5914B40f310EB3d352"; // Address that will receive the royalty
=======
const PUBLIC_MINT_START_DATE = "2022-07-30"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = 2022-07-30; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 1000; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0x1FaB081c34Cf9Df25342045A938Cd69c4Ec16236"; // Address that will receive the royalty
>>>>>>> 0603cd03e1f8b5dcb43803c4bbd1aa77c1f34c0b
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = null; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = ["0x08595894d652a1Ee2bFdCF5914B40f310EB3d352"]; // only update if you want to manually set the whitelisted addresses

// ** OPTIONAL **
let CONTRACT_ADDRESS = "YOUR CONTRACT ADDRESS"; // If you want to manually include it

// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = true; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = CONTRACT_NAME; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
<<<<<<< HEAD
const GENERIC_DESCRIPTION = "wl"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = "https://ipfs.io/ipfs/bafkreig5obersatx4jswkswztnuf5hqke3eg2oodyd6bg56gg6icf46j4a"; // Replace with your generic image that will display for all NFTs pre-reveal.
=======
const GENERIC_DESCRIPTION = "??????"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = "https://ipfs.io/ipfs/bafkreig2e2nnq7p4fy6qycqyt4564amkwtytn6rpff4gnkzx6yciyfwhdq"; // Replace with your generic image that will display for all NFTs pre-reveal.
>>>>>>> 0603cd03e1f8b5dcb43803c4bbd1aa77c1f34c0b

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK") {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  PRESALE_MINT_START_DATE,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_WHITELISTED_ADDRESSES
};
