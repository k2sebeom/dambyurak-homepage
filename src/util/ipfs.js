

export const GATEWAY_URL = "https://gateway.pinata.cloud/ipfs";

export function ipfsToGateway(url) {
    return GATEWAY_URL + url.replace("ipfs://", '/');
}