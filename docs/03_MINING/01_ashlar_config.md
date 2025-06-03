---
sidebar_position: 1
---

# The Ashlar

![alt text](/img/ashlar/ashlar.jpg)

The Ashlar is our custom engineered ESP32 mining device. It comes from the factory pre-flashed. All you have to do is plug it in, connect to your 2.4GHz Wi-Fi network, and provide your Solana public address.

## Prerequisites
* A mobile phone running Android or iOS
* A 2.4GHz Wi-Fi network with Internet access
**NOTE: Many Wifi networks are configured by default to run a 2.4GHz and a 5GHz network with the same network name. This may cause failure to identify the network or failure to join the network in some cases. If you have issues connecting to your Wi-Fi network we recommend creating a stand-alone 2.4GHz Wi-Fi network with a unique name. This is a limitation of ESP32 devices and outside of our control**
* An Ashlar
* A Solana wallet

If you are using a computer you will need a wallet plug-in installed in your browser of choice. Chrome seems to be the most trouble-free. We support Phantom, Solflare, and Backpack wallet plug-ins. The use of a ledger device is supported by all three. Other device and wallet combos may also work. Be aware that using a hardware wallet may slightly slow down the claims process.

On mobile devices, you will need to use the browser built into the wallet app. Claiming directly from a normal browser on a mobile device does not work. We support Phantom, Solflare, and Backpack wallets.

## Configuration

1. Carefully unbox your Ashlar. **If you purchased more than one, please unbox and configure them one at a time.**
![alt text](/img/ashlar/unbox.jpg)

2. Insert the Ashlar into the base. It only fits into the base in one orientation (as illustrated below). Do not try to force it in place. Plug the base into the wall using the provided power supply and *power only* cable. It will greet you by gently pulsing its LEDs. Say good morning.
![alt text](/img/ashlar/setup.jpg)

3. Download the Ashlar provisioning app from the [App store](https://testflight.apple.com/join/VHttnEXp) or [Google Play](https://play.google.com/store/apps/details?id=com.entropy.wifi_provisioning). Note that the iOS app is currently in public beta on Testflight. 

4. Fund your Solana wallet with about 0.03 SOL. It is strongly recommended that you create a **NEW** Solana wallet that will be used exclusively for this Ashlar.

5. Turn on your phone's Bluetooth.

6. Launch the app.

![alt text](/img/ashlar/icon_ignition.jpeg) ![alt text](/img/ashlar/icon_genesis.jpeg)

7. Tap the Entropy logo to start the provisioning process.

![alt text](/img/ashlar/genesis_1.jpeg)

8. Select Ashlar from the list of available devices.

![alt text](/img/ashlar/genesis_2.jpeg)

9. Enter the address of your new solana wallet and hit submit.

![alt text](/img/ashlar/genesis_3.jpeg)

10. Select your Wifi network and enter the password when prompted.

![alt text](/img/ashlar/genesis_4.jpeg)

11. The LEDs will pulse green if the Ashlar successfully connects to your Wi-Fi network. If not, they will turn red. If the process failed, go back to step 7 and repeat.

12. The last step in the process is to make your first claim. In order to verify that your device is functioning we have gifted you 1142 ENT. This amount becomes available when your Ashlar registers itself. After making this first claim, your Ashlar will be permenantly tied to you wallet address. Do not lose track of this wallet as it will be permanently required to claim. 

**Before attempting to make your first claim, please make sure you have about some SOL in your mining wallet, at least 0.03 if it does not hold any ENT.**

### Claiming from a computer
a) Unlock your wallet

![alt text](/img/ashlar/unlock.png)

b) Select the wallet you used to register your Ashlar

![alt text](/img/ashlar/selectWallet.png)

c) Point your browser to https://justentropy.lol

d) Select console in the upper right corner

![alt text](/img/ashlar/console.jpg)

e) On the console page, select the claim button

![alt text](/img/ashlar/claim.png)

f) Click confirm

![alt text](/img/ashlar/confirm.png)

g) Sign the transaction

![alt text](/img/ashlar/sign.png)

### Claiming from a mobile device ###

a) Open your wallet app (Phantom in this case)

![](/img/ashlar/mobilePhantom.jpg)

b) Select the wallet you entererd when you registered your ashlar

![](/img/ashlar/wallet.jpg)

c) Hit the search button

![](/img/ashlar/search.jpg)

d) Enter "justentropy.lol" in the search box

![](/img/ashlar/site1.jpg)

e) Hit the console button

![](/img/ashlar/mobileConsole.jpg)

f) On the console page, hit claim

![](/img/ashlar/mobileClaim.jpg)

g) Read the disclaimer and hit confirm 

![](/img/ashlar/mobileConfirm.jpg)

h) Sign the transaction

![](/img/ashlar/mobileSign.jpg)




 **If there is nothing to claim it means that you entered your wallet address incorrectly. Please proceed to Reprovisioning to rectify this situation.** 

13. Setup is now complete. A few items to note:


* The pairing between your Ashlar and your mining wallet is permenant. Even if you attempt to change it by reprovisioning (after your first claim) the system will ignore the new address. 
* Please leave your Ashlar plugged in to a constant power source such as the one that came in the package. Do not leave it connected to a computer as these often shut off power to USB ports to save power. Frequent power cycling of the Ashlar will lower your earnings.
* Your Ashar will send us nothing approximately once an hour, at which time it will emit a pink pulse of light. 
* After a few hours you will be able to check the status of your device on the [console](https://justentropy.lol/console).
* The Ashlar LEDs will turn red if the Wi-Fi connection is lost.



## Reprovisioning

You can change the Wi-Fi network that your Ashlar is connected to. If you have not yet claimed on your new wallet you can also submit a new wallet address. If you entered your Solana wallet address incorrectly, this process provides a mechanism to correct it before the a wallet address is permanantly associated with your Ashlar.

To start the reprovisioning process, insert a paperclip or SIM ejector tool into the hole on the side of the device. Depress the button and hold it down for 5 seconds. The LEDs will turn blue. They will then turn red, after which you can release the button. Go back to step 5 and follow the provisioning instructions.

![alt text](/img/ashlar/reset.jpg)
