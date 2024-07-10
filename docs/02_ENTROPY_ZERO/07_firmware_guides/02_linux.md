---
sidebar_position: 2
---

# Linux

Instructions to onboard your DIY miner using Linux

### Prerequisites
* Python 3
* 2.4GHz WiFi connection
* Android or IOS phone

### Guide

### Step 1: Ready the device

* Open a terminal window

* Install the ESP bootloader utility
  ```
  sudo pip3 install esptool
  ```

* Connect your ESP32 or ESP32-S3
  * You may have multiple connection ports on the device; the correct one is likely labeled `USB`

* Find the port where the board is connected
  * List all connections before and after plugging in the device
    ```
    ls /dev/tty*
    ```
    * Look for something like `/dev/ttyUSB`
  * Unlikely, but you may need to install a driver to allow the board to communicate with your computer
    * Instructions are [here](https://docs.espressif.com/projects/esp-idf/en/v5.2.2/esp32s3/get-started/establish-serial-connection.html)

### Step 2: Flash firmware

* Download your firmware binary `YOUR_FIRMWARE.bin`
    * For security reasons, every binary is unique to a credential

* Change your working directory to the location of the firmware binary `YOUR_FIRMWARE.bin`

* Clear the board of any previous software if necessary
    ```
    sudo esptool.py --chip esp32* --port /dev/tty* erase_flash
    ```
  * `esp32*` is `esp32` or `esp32s3`, depending on your board
* Flash the firmware
    ```
    sudo esptool.py --chip esp32* --port /dev/tty* --baud 115200 write_flash --flash_mode dio 0x0 YOUR_FIRMWARE.bin
    ```
* To monitor the device, install and run the GNU Screen utility
    ```
    sudo apt-get install screen
    sudo screen -L /dev/tty* 115200
    ```
    * To quit: <kbd>ctrl+A</kbd> <kbd>ctrl+D</kbd>

### Step 3: Connect to WiFi [ESP32 boards only support the 2.4GHz band]

* Download an ESP WiFi config app from your app store
  * The following have been tested
    * [Android](https://play.google.com/store/apps/details?id=com.techbot.smart_config)
    * [IOS](https://apps.apple.com/us/app/smartconnect-for-esp/id1592092325)

* Connect your phone to your WiFi access point

* Open the app and share the password with the device

### Step 4: Set it and forget it

* Monitor the device over the terminal for as long as you like

* Disconnect and plug the device to a 5V power source
  * Any USB adapter should work
  * Average current draw will be about 20mA, spiking to about 0.5A when connecting to WiFi, i.e., the power consumption is about 0.1W

