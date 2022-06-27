//import { pinJSONToIPFS } from "./pinata.js";
//require("dotenv").config();
//const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const contractABI = require("./contract-abi.json");
const contractAddress = "0xe3abcc2e250fb7d9d9909738543555161f425594";


// async function loadContract() {
//   return new web3.eth.Contract(contractABI, contractAddress);
// }

//export const mintNFT = async (url, name, description) => {
  // if (url.trim() == "" || name.trim() == "" || description.trim() == "") {
  //   return {
  //     success: false,
  //     status: "❗Please make sure all fields are completed before minting.",
  //   };
  // }

  //make metadata
  // const metadata = new Object();
  // metadata.name = name;
  // metadata.image = url;
  // metadata.description = description;

  // const pinataResponse = await pinJSONToIPFS(metadata);
  // if (!pinataResponse.success) {
  //   return {
  //     success: false,
  //     status: "😢 Something went wrong while uploading your tokenURI.",
  //   };
  // }

async function mintNFT(web3,fromAdd){

  const tokenURI = "https://gateway.pinata.cloud/ipfs/QmRGsWfypGe9DsVLYpFhmdjK7uTSsQ6DkhdXf37kd5C6oN";

  let NFTContract = await new web3.eth.Contract(contractABI, contractAddress);
  console.log(NFTContract)

  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: fromAdd, // must match user's active address.
    data: NFTContract.methods.createCollectible(tokenURI).encodeABI(),
  };

  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    return {
      success: true,
      status:
        "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" +
        txHash,
    };
  } catch (error) {
    return {
      success: false,
      status: "😥 Something went wrong: " + error.message,
    };
  }
};

export default mintNFT;