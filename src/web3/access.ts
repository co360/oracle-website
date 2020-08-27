import { ethers, providers, Signer } from 'ethers'
let _provider: providers.Web3Provider
let _signer: Signer

const getProvider = async () => {
  if (_provider) {
    return _provider
  } else {
    _provider = new ethers.providers.Web3Provider(window.ethereum)
    return _provider
  }
}

const getSigner = async () => {
  if (!_provider) {
    _provider = new ethers.providers.Web3Provider(window.ethereum)
  }
  if (_signer) {
    return _signer
  } else {
    _signer = _provider.getSigner()
    return _signer
  }
}

export { getProvider, getSigner }
