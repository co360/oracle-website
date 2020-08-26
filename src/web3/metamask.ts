import { ethers, providers, Signer } from 'ethers'
import { teams } from './teams'

let provider: providers.JsonRpcProvider | null = null
let signer: Signer | null = null
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
      signer = provider.getSigner()
      return true
    }
  } catch (error) {
    return false
  }
}
export { provider, signer }
