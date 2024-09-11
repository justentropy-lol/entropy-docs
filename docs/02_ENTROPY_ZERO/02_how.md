---
sidebar_position: 2
---

# How it works

In ENTROPY, miners generate 64 bits of random information at an average of once per hour. These 64 bits are passed to an oracle that measures the randomness of the information and rewards miners with a share of tokens minted in the current epoch. Theoretically, the measure of entropy for $N$ bits of information $x_i$, $i = 1,\dots,N$, is given by:

$-\sum_i p_i\log(p_i) + (1-p_i)\log(1-p_i)$

where $p_i$ is the probability that bit $i$ is equal to one. If, for every bit, there is an equal chance that it be one or zero, the entropy of $N$ bits is equal to $N$. Therefore, in the ENTROPY network, miners generate 64 bits of entropy every hour on average.

The 64-bit message is sent at random intervals $T_k$, whose length is a random variable governed by an exponential probability density function:

$P(T_k = t) = \lambda e^{-\lambda t},~t \geq 0$

where $\lambda$ is equal to an hour. The choice of exponential distribution has been made due to its memorylessness property:

$P(T_k = t+u ~|~ T_k > u) = P(T_k = t),~t,u \geq 0$

which allows the miner to "re-roll" its wait time without affecting the long-run distribution. Assuming disconnections last less than a few minutes, this gives miners the benefit of being able to temporarily disconnect from the network almost without penalty and can be useful in the case of temporary loss of power or Internet connection.

## Token reward

Messages are received by an oracle, which measures the characteristics of the entropy received and the frequency at which messages were received. These are tabulated and scored and, once a day, all miners who have sent at least one message since the last ranking are ranked according to their score.

Daily token rewards are determined according to the formula:
- rewards are monotonic with respect to rank 
- 8/9 are equally distributed to the top 80% of miners
- 1/9 is distributed to the bottom 20% of miners, where amount of reward per miner decreases linearly with decreasing rank
- the lowest-ranking miner receives as close to nothing as possible

## Token claim and burn

Rewards must be claimed from the [ENTROPY portal](https://justentropy.lol). Each claim is subject to a fee totaling 1/42 of tokens claimed, which is used to fund the project treasury.

Tokens that remain unclaimed for a period of 7 days are permanently burned.
