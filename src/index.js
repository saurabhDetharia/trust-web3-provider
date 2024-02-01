// Copyright © 2017-2022 Trust Wallet.
//
// This file is part of Trust. The full Trust copyright notice, including
// terms governing use, modification, and redistribution, is contained in the
// file LICENSE at the root of the source code distribution tree.

"use strict";

import TimelessWeb3Provider from "./ethereum_provider";
import TimelessSolanaWeb3Provider from "./solana_provider";
import TimelessCosmosWeb3Provider from "./cosmos_provider";
import TimelessAptosWeb3Provider from "./aptos_provider";

window.timelesswallet = {
  Provider: TimelessWeb3Provider,
  SolanaProvider: TimelessSolanaWeb3Provider,
  CosmosProvider: TimelessCosmosWeb3Provider,
  AptosProvider: TimelessAptosWeb3Provider,
  postMessage: null,
};
