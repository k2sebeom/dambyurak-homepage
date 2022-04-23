

export const CONTRACT_ADDR = "0x94681182d532400249342A7A98998B24Fa4F17Ad";
export const CONTRACT_ABI = [
    "function nakseo(uint256 _tokenId, uint256 _msgId) view returns (address, string memory)",
    "function nakseoCount(uint256 _tokenId) view returns (uint256)",
    "function writeOnWall(uint256 _tokenId, string memory _content) public payable",
    "function writePrice(uint256 _tokenId) public view returns(uint256)",
    "function totalSupply() public view returns(uint256)",
    "function ownerOf(uint256 _tokenId) public view returns(address)",
    "function setWritePrice(uint256 _tokenId, uint256 _price) public",
    "function assetURI(uint256 _tokenId) view public returns(string memory)"
];

export const PROVIDER_URL = "HTTP://127.0.0.1:8545";

export const CHAIN_CONFIG = {
    chainId: '0x89',
    chainName: 'Polygon Mainnet',
    rpcUrls: [PROVIDER_URL]
}