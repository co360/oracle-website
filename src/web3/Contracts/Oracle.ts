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
  ADA: '0xAE48c91dF1fE419994FFDa27da09D5aC69c30f55',
  ETH: '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419',
  BCH: '0x9F0F69428F923D6c95B781F89E165C9b2df9789D',
  BNT: '0x1E6cF0D433de4FE882A437ABC654F58E1e78548c',
  BTC: '0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c'
}
interface IRoundData {
  roundId: BigNumber
  answer: BigNumber
  startedAt: BigNumber
  updatedAt: BigNumber
  answeredInRound: BigNumber
}

export class OracleProvider {
  private static _instance: OracleProvider
  public contracts = new Map<string, Contract>()
  private constructor(provider: providers.Web3Provider) {
    for (const [key, value] of Object.entries(UsdContractsAddresses)) {
      this.contracts.set(key, new Contract(value, AggregatorV3InterfaceABI, provider))
    }
  }

  static async getInstance(): Promise<OracleProvider> {
    if (!OracleProvider._instance) {
      const provider = await getProvider()
      OracleProvider._instance = new OracleProvider(provider)
    }
    return OracleProvider._instance
  }

  public latestRoundData = async (asset: assets = assets.ETH): Promise<IRoundData> => {
    const response = await this.contracts.get(asset)?.latestRoundData()
    return response
  }

  public getRoundData = async (
    asset: assets = assets.ETH,
    blockOffset: number = 1
  ): Promise<IRoundData> => {
    const latestRound = await this.latestRoundData()
    const response = await this.contracts
      .get(asset)
      ?.getRoundData(latestRound.roundId.sub(blockOffset))
    return response
  }

  public getLatestPrice = async (asset: assets = assets.ETH): Promise<BigNumber> => {
    const latestRound = await this.latestRoundData(asset)
    return latestRound.answer
  }
}
