import Swal from 'sweetalert2';
import { CONTRACT_ABI, CONTRACT_ADDR } from '../constants/chain';
import { ethers } from 'ethers';

let provider, signer, contract;


function setupContract() {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
    contract = new ethers.Contract(CONTRACT_ADDR, CONTRACT_ABI, signer);    
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

export async function writeOnWall(tokenId, content) {
    const connected = await checkConnection();
    if(!connected) {
        return false;
    }
    // TODO change to a correct network
    console.log(tokenId);
    const price = await contract.writePrice(tokenId);
    console.log(price)
    try {
        await contract.writeOnWall(tokenId, content, {
            value: price
        });
        return true;
    } catch (err) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.message,
        });
        return false;
    }
}