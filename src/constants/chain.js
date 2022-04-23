

export const CONTRACT_ADDR = "0x2C4AA15027b99cA394Cd75558733Ac1fdD7D3Ae6";
export const CONTRACT_ABI = [
    "function writeOnWall(uint256 _tokenId, string memory _content) public payable",
    "function writePrice(uint256 _tokenId) public view returns(uint256)",
    "function totalSupply() public view returns(uint256)",
    "function ownerOf(uint256 _tokenId) public view returns(address)",
    "function setWritePrice(uint256 _tokenId, uint256 _price) public",
    "function assetURI(uint256 _tokenId) view public returns(string memory)"
];

export const PROVIDER_URL = "https://rpc-mumbai.maticvigil.com";

export const CHAIN_CONFIG = {
    chainId: '0x13881',
    chainName: 'Polygon Mainnet',
    rpcUrls: [PROVIDER_URL]
}