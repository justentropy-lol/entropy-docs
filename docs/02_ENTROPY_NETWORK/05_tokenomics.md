---
sidebar_position: 5
---

# Tokenomics

All tokens in the ENTROPY network are mined by miners. There is no allocation to the team or investors. Once a day, tokens are rewarded in proportion to their daily score.

Miners pay a fee when claiming rewards, totaling 1/42 of tokens claimed. The fee funds a treasury that is controlled by members of HQ and which is used for network upkeep. As of January 2025, with 10% of each claim, miners have also been funding another treasury, to be used in a future airdrop.

Miners must claim tokens within 7 days. Tokens left unclaimed are automatically burned. No fees are paid on burned tokens.

The network began by issuing rewards totaling 76 million tokens per day. The issuance amount is halved yearly so that the maximum possible supply is no greater than 55.5 billion tokens, less any tokens that have been burned.

## Base score

Two types of devices exist on the ENTROPY network: ENTROPY-0 devices&mdash;DIY boards flashed with custom firmware unique to each miner&mdash;and Ashlars&mdash;proprietary hardware manufactured to mine on the ENTROPY network.

All Ashlars receive a base score of 1.00. 

ENTROPY-0 devices are scored according to the quality of entropy recieved. In this case, to prevent prevarication, the quality of randmoness received by the ENTROPY oracle is measured and tabulated; once a day, all ENTROPY-0 miners who have sent at least one message since the last ranking are ranked according to quality and their base score is determined according to the following formula:

- all but the bottom 25 miners receive a base score of 1.00
- miners in the bottom 25 receive a base score of 0.05

## Score multipliers

### NFTs

The upcoming Ashlar Acolytes PFP collection will consist of 5,555 Whales, 3,333 Apes, and 1,111 Snakes, receiving score multipliers of 1.33x, 1.00x, 0.90x, respectively. These are not stackable and only the highest multiplier in a wallet will be taken into account.

The [Phantasmagoria](https://drip.haus/entropy) collection provides multipliers that become active in the month following a drop of artwork with legendaries providing a multiplier of 1.69x and rares providing 1.21x.  One legendary may be stacked with one rare to provide a multiplier of 2.045x. Additionally, owning at least one of these two types results in an additional multiplier equal to the number of miners on the network divided by 500, which can be no less than 1.00x.

### Jeeter Deleter

The Jeeter Deleter (JD) is an algorithm that ensures that wayward miners comply with the spirit of mining: jeeting (indiscriminate selling) is not tolerated. The JD monitors the ratio of tokens currently held in the wallet to the amount claimed. A ratio of 1 or higher results in a multiplier of 1.00x. A ratio below an adaptive threshold results in a score of 0.00. A ratio between the threshold and 1 results in a multiplier between 0.00x and 1.00x, inclusive.

*Seven days spent below the threshold results in permanent loss of mining priviliges for that miner.*

## Restrictions on claiming

### NFTs

Upon the release of the Ashlar Acolytes collection, miners will be required to hold an NFT for at least seven days to be able to claim their rewards. These NFTs include any one of those from the Ashlar Acolyte collection, and a small number of others, including any DRiP Eternals and Ultimates.

### The Second Law

According to The Second Law of Thermodynamics, entropy in any isolated system may never decrease. ENTROPY mirrors this physical law with a law of its own.

The Second Law of ENTROPY concerns itself with the claiming of tokens that miners have generated from the ENTROPY network.

According to The Second Law, tokens may be withdrawn from a miner's wallet but this may create a local entropy deficit. The deficit created when tokens are withdrawn may be reduced in one of two ways: either by the burning of tokens through the automated seven-day burning mechanism, or by simply replenishing the token balance. Stated formally:

**New tokens may only be claimed if the amount of tokens in a miner's wallet has not been less than the total number of tokens ever claimed, minus the number of tokens ever burned, at any time during the past seven days.**

The impact of the Second Law is that it causes miners to think about their long-term participation in the network, but does not punish transfers outright. Miners may choose to withdraw a large a number of tokens, but must understand that their ability to claim may be curtailed, and that any tokens they mine in the future may be automatically burned until the entropy deficit is resolved.

Effectively, entropy deficit may be resolved directly through mining. Because tokens that are burned through the automatic burn mechanism are counted against the deficit, sufficient mining results in the lifting of the claim restriction.

### Jeeter Deleter

The adaptive threshold corresponding to the ratio of amount of tokens held in a wallet to the amount of tokens claimed changes daily. This threshold is hidden from miners to obfuscate its function. Seven days spent below the threshold results in permanent loss of mining priviliges for that miner.
