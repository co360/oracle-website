import { Contract, providers, BigNumber } from 'ethers'
import { getProvider } from '@web3/access'
import AggregatorV3InterfaceABI from '@web3/Contracts/ABI/AggregatorV3InterfaceABI'
export enum assets {
  'ADA' = 'ADA',
  'ETH' = 'ETH',
  'BCH' = 'BCH',
  'BTC' = 'BTC',
  'BNT' = 'BNT'
}
const UsdContractsAddresses: { [key in assets]: string } = {
  [assets.ADA]: '0xAE48c91dF1fE419994FFDa27da09D5aC69c30f55',
  [assets.ETH]: '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419',
  [assets.BCH]: '0x9F0F69428F923D6c95B781F89E165C9b2df9789D',
  [assets.BNT]: '0x1E6cF0D433de4FE882A437ABC654F58E1e78548c',
  [assets.BTC]: '0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c'
}
interface IRoundData {
  roundId: BigNumber
  answer: BigNumber
  startedAt: BigNumber
  updatedAt: BigNumber
  answeredInRound: BigNumber
}

export type ContractsMap = {
  [key in assets]: Contract
}

export class OracleProvider {
  private static _instance: OracleProvider
  public contracts: ContractsMap
  private constructor(provider: providers.Web3Provider) {
    this.contracts = Object.fromEntries(
      Object.entries(UsdContractsAddresses).map(([asset, address]) => [
        asset,
        new Contract(address, AggregatorV3InterfaceABI, provider)
      ])
    ) as ContractsMap
  }

  static async getInstance(): Promise<OracleProvider> {
    if (!OracleProvider._instance) {
      const provider = await getProvider()
      OracleProvider._instance = new OracleProvider(provider)
    }
    return OracleProvider._instance
  }

  public latestRoundData = async (asset: assets): Promise<IRoundData> => {
    const response = await this.contracts[asset].latestRoundData()
    return response
  }

  public getRoundData = async (
    asset: assets,
    blockOffset: number = 1
  ): Promise<IRoundData> => {
    const latestRound = await this.latestRoundData(asset)
    const response = await this.contracts[asset].getRoundData(latestRound.roundId.sub(blockOffset))
    return response
  }

  public getLatestPrice = async (asset: assets): Promise<BigNumber> => {
    const latestRound = await this.latestRoundData(asset)
    return latestRound.answer
  }

  public getPreviousPrice = async (asset: assets): Promise<BigNumber> => {
    // seems like not all oracle migrated to new api
    try {
      const latestRound = await this.getRoundData(asset)
      return latestRound.answer
    } catch (error) {
      console.log(`error ${asset}`)
      return BigNumber.from(0)
    }
  }
}
