

export const CONTRACT_ADDR = "0x74361FE1fB3265CB395F4e3D9B41dAAc207af03e";
export const CONTRACT_ABI = [
    "function nakseo(uint256 _tokenId, uint256 _msgId) view returns (address, string memory)",
    "function nakseoCount(uint256 _tokenId) view returns (uint256)",
    "function writeOnWall(uint256 _tokenId, string memory _content) public payable",
    "function writePrice(uint256 _tokenId) public view returns(uint256)",
    "function totalSupply() public view returns(uint256)",
    "function ownerOf(uint256 _tokenId) public view returns(address)",
    "function setWritePrice(uint256 _tokenId, uint256 _price) public"
];

export const PROVIDER_URL = "HTTP://127.0.0.1:8545";
