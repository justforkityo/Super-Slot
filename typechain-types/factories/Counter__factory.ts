/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { Counter, CounterInterface } from "../Counter";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "decrement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "increment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060008081905550610279806100276000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80632baeceb714610046578063a87d942c14610050578063d09de08a1461006e575b600080fd5b61004e610078565b005b6100586100d7565b6040516100659190610114565b60405180910390f35b6100766100e0565b005b60008054116100bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100b39061018c565b60405180910390fd5b60016000808282546100ce91906101db565b92505081905550565b60008054905090565b60016000808282546100f2919061020f565b92505081905550565b6000819050919050565b61010e816100fb565b82525050565b60006020820190506101296000830184610105565b92915050565b600082825260208201905092915050565b7f436f756e742063616e6e6f74206265206e656761746976650000000000000000600082015250565b600061017660188361012f565b915061018182610140565b602082019050919050565b600060208201905081810360008301526101a581610169565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006101e6826100fb565b91506101f1836100fb565b9250828203905081811115610209576102086101ac565b5b92915050565b600061021a826100fb565b9150610225836100fb565b925082820190508082111561023d5761023c6101ac565b5b9291505056fea26469706673582212207cb591d63680e6174ec7e6dfd232a867bcc188caff539bf7a3ee3a131107acc164736f6c63430008130033";

type CounterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CounterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Counter__factory extends ContractFactory {
  constructor(...args: CounterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Counter & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Counter__factory {
    return super.connect(runner) as Counter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CounterInterface {
    return new Interface(_abi) as CounterInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Counter {
    return new Contract(address, _abi, runner) as unknown as Counter;
  }
}
