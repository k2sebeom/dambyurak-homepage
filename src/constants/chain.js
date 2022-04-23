

export const CONTRACT_ADDR = "0x0DcC012331be316F2C0FCaFfc2d6d032311F5c2D";
export const CONTRACT_ABI = [
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