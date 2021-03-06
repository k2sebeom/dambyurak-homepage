import Swal from 'sweetalert2';
import { CONTRACT_ABI, CONTRACT_ADDR, CHAIN_CONFIG } from '../constants/chain';
import { ethers } from 'ethers';

let provider, signer, contract;

function setupContract() {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
    contract = new ethers.Contract(CONTRACT_ADDR, CONTRACT_ABI, signer);    
}

export function isWalletAvailable() {
    return typeof window.ethereum !== 'undefined';
}

export async function getConnectedAccounts() {
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    return accounts;
}

export function subscribeTo(event, callback) {
    window.ethereum.on(event, callback);
}

export async function checkConnection() {
    if (typeof window.ethereum !== 'undefined') {
        const permissions = await window.ethereum.request({
            method: "wallet_getPermissions"
        });
        if(permissions.length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'You are not connected to a wallet',
                text: 'Click a wallet button above',
            });
            return false;
        }
        else {
            setupContract();
            return true;
        }
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please install a metamask extension',
            footer: '<a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn">Install MetaMask on Chrome</a>'
        });
        return false;
    }
}

export async function connectMetaMask() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            await window.ethereum.request({
                method: "wallet_requestPermissions",
                params: [{
                    eth_accounts: {}
                }]
            });
            
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Connected to Metamask wallet',
            });
            
            return await window.ethereum.request({ method: "eth_accounts" });
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err.message,
            });
            return null;
        }
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please install a metamask extension',
            footer: '<a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn">Install MetaMask on Chrome</a>'
        });
        return null;
    }
}

export async function switchChain() {
    try {
        await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{
                chainId: CHAIN_CONFIG.chainId
            }]
        })
        return true;
    } catch (switchError) {
        if(switchError.code === 4902) {
            try {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [CHAIN_CONFIG]
                })
                return true;
            }
            catch(addError) {
                return false;
            }
        }
        else {
            return false;
        }
    }
}


export async function setWritePrice(tokenId, newPrice) {
    const connected = await checkConnection();
    if(!connected) {
        return false;
    }
    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    const chainCorrect = chainId === CHAIN_CONFIG.chainId;
    if(!chainCorrect) {
        Swal.fire({
            icon: 'error',
            title: 'Chain is not correct',
            text: `Please switch to ${CHAIN_CONFIG.chainName}`,
        });
        return false;
    }

    try {
        await contract.setWritePrice(tokenId, ethers.utils.parseEther(newPrice));
        return true;
    } catch (err) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: !err.data ? err.message : err.data.message,
        });
        return false;
    }
}

export async function writeOnWall(tokenId, price, content) {
    const connected = await checkConnection();
    if(!connected) {
        return false;
    }
    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    const chainCorrect = chainId === CHAIN_CONFIG.chainId;
    if(!chainCorrect) {
        Swal.fire({
            icon: 'error',
            title: 'Chain is not correct',
            text: `Please switch to ${CHAIN_CONFIG.chainName}`,
        });
        return false;
    }
    const ethPrice = ethers.utils.parseEther(price);
    try {
        await contract.writeOnWall(tokenId, content, {
            value: ethPrice
        });
        return true;
    } catch (err) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: !err.data ? err.message : err.data.message,
        });
        return false;
    }
}