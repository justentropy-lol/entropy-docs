---
sidebar_position: 3
---

# Why it works

## Security model

ENTROPY is a permissioned network, allowing only pre-registered hardware to mine tokens.

The network need perform only minimal quality control. Beyond measuring the randomness of data received, there is no need to prevent maliciousness because one cannot be more random than randomness itself.

Suppose an attacker generates a sequence of bits that is not random, then the entropy of the signal produced is less than 64 bits because the entropy of a single bit can never be greater than 1. This is because:

$-p\log(p) - (1-p)\log(1-p) \leq 1$

for any $p \in [0,1]$.

The weakness of the network is in the statistical tools used by the oracle to determine randomness. However, given the large supply of free entropy available on the market, securing the quality of random signals is not a high priority at this time.

