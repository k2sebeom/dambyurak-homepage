import { CONTRACT_ABI, CONTRACT_ADDR, PROVIDER_URL } from '../constants/chain';
import { ethers } from 'ethers';

export const provider = new ethers.providers.JsonRpcProvider(PROVIDER_URL);
export const contract = new ethers.Contract(CONTRACT_ADDR, CONTRACT_ABI, provider);
