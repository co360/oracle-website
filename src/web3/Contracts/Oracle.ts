import { Contract } from 'ethers'
import { getProvider } from '@web3/access'
import AggregatorV3InterfaceABI from '@web3/Contracts/ABI/AggregatorV3InterfaceABI'
const addr = '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419'
// TODO refactor it to singleton with singer/provider mode
export const getOracleContract = async (): Promise<Contract> => {
  const provider = await getProvider()
  return new Contract(addr, AggregatorV3InterfaceABI, provider)
}
export const getLatestPrice = async () => {
  const contract = await getOracleContract()
  console.log(contract)
  console.log(await contract.latestRoundData())
}
