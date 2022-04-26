

export const CONTRACT_ADDR = "0x4B2FbEd0CcDea6DfA35C5557Cd670C11922198ED";
export const CONTRACT_ABI = [
    "function writeOnWall(uint256 _tokenId, string memory _content) public payable",
    "function writePrice(uint256 _tokenId) public view returns(uint256)",
    "function totalSupply() public view returns(uint256)",
    "function ownerOf(uint256 _tokenId) public view returns(address)",
    "function setWritePrice(uint256 _tokenId, uint256 _price) public",
    "function assetURI(uint256 _tokenId) view public returns(string memory)"
];

export const PROVIDER_URL = "https://polygon-rpc.com";

export const CHAIN_CONFIG = {
    chainId: '0x89',
    chainName: 'Polygon Mainnet',
    rpcUrls: [PROVIDER_URL]
}