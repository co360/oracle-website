import { ethers, Signer } from 'ethers'

import oracle from '../build/contracts/Oraclefy.json'
import { signer } from './metamask'
import { teams } from './teams'

export const oraclefy = new ethers.Contract(teams.contracts.oracle, oracle.abi, signer as Signer)
