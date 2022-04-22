

export const CONTRACT_ADDR = "0x83Fd3aF8b4FcA053D7b0BC73cAcfE17c25e05b08";
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

export const PROVIDER_URL = "https://polygon-rpc.com/";

export const CHAIN_CONFIG = {
    chainId: '0x89',
    chainName: 'Polygon Mainnet',
    rpcUrls: [PROVIDER_URL]
}