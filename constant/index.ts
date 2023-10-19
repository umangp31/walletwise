const ADDRESS_REGEX = /^(0x)?[\da-f]{40}$/i;

const IPFS_GATEWAY = "https://ipfs.io/ipfs/";
const ARWEAVE_GATEWAY = "https://arweave.net";

const IPFS_UPLOAD_API = "https://api.web3.storage/upload";

const STATIC_ASSET =
    "https://lens.infura-ipfs.io/ipfs/bafybeibv2kpqpjtvuj5uprvq6knnr2reb7ylq3o4bnypqjioqgxmjw2akq/5460475.webp";

const MENTION_REGEX = /(@[^\s]+)/g;

const URL_REGEX =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

const LENSPLAY_SITE = "https://lensplay.xyz"

export {
    IPFS_GATEWAY,
    ADDRESS_REGEX,
    ARWEAVE_GATEWAY,
    STATIC_ASSET,
    IPFS_UPLOAD_API,
    MENTION_REGEX,
    URL_REGEX,
    LENSPLAY_SITE
};