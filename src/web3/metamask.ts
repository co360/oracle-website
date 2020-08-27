import { Contract, ethers, providers, Signer } from 'ethers'
import { Provider } from '@ethersproject/abstract-provider'

import { teams } from './teams'
import oracle from '../build/contracts/Oraclefy.json'

let provider: providers.JsonRpcProvider | null = null
let signer: Signer | null = null
let oraclefy: Contract

export const getProvider = async () => {
  if (provider) {
    console.log('Already initialized')
    return 'Already initialized'
  }
  if (!window.ethereum) {
    console.log('no provider')
    return 'no provider'
  }
  // Enable provider
  try {
    const enable = await window.ethereum.enable()
    console.log(enable)
    if (enable) {
      provider = new ethers.providers.JsonRpcProvider(
        `https://sandbox.truffleteams.com/${teams.projectId}`
      )
      oraclefy = new ethers.Contract(teams.contracts.oracle, oracle.abi, provider as Provider)
      signer = provider.getSigner()
      return true
    }
  } catch (error) {
    return false
  }
}

export { provider, signer, oraclefy }
