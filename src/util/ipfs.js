

export const GATEWAY_URL = "https://gateway.pinata.cloud/ipfs";

export function ipfsToGateway(url) {
    if (url.includes('ipfs://')) {
        return GATEWAY_URL + url.replace("ipfs://", '/');
    }
    else {
        return url;
    }
}

export function getServedImageUrl(tokenId) {
    return `https://github.com/k2sebeom/dambyurak-nft/blob/main/nft/asset/images/WALL-${tokenId}.png?raw=true`
}
