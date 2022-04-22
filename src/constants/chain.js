

export const CONTRACT_ADDR = "0xB27b37888a83BFd48b3b3e7B9469F17219CdD67F";
export const CONTRACT_ABI = [
    "function nakseo(uint256 _tokenId, uint256 _msgId) view returns (address, string memory)",
    "function nakseoCount(uint256 _tokenId) view returns (uint256)",
    "function writeOnWall(uint256 _tokenId, string memory _content) public payable",
    "function writePrice(uint256 _tokenId) public view returns(uint256)",
    "function totalSupply() public view returns(uint256)",
    "function ownerOf(uint256 _tokenId) public view returns(address)",
    "function setWritePrice(uint256 _tokenId, uint256 _price) public",
    "function tokenURI(uint256 _tokenId) view public returns(string memory)"
];

export const PROVIDER_URL = "https://rpc-mumbai.maticvigil.com";

export const CHAIN_CONFIG = {
    chainId: '0x13881',
    chainName: 'Polygon Mumbai Testnet',
    rpcUrls: [PROVIDER_URL]
}