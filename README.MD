
#### Note
- This repo uses yarn workspaces to make running and installing projects simpler, if you do not use yarn you can manually go into each folder, install package and run the script.



## Running Solutions (Yarn)

**Step 1**
- In project roon run `yarn`
- This will install all required packages for all projects.

### Problem 1
- To run project in root type `yarn run:problem-1`
- Output will be displayed in console

### Problem 2
- To run project in root type `yarn run:problem-2`
- Development server will spin up and display the web page

### Problem 3
- To run project in root type `yarn run:problem-3`
- Output will be displayed in console

### Problem 4
- To run project in root type `yarn run:problem-4`
- Output will be displayed in console

# Problem 5
This may require a bit of configuration depending on enviroment, for ease of use, I have deployed a contract on BSC Testnet as shown below.

- Contract deplyed on BSC Mainnet https://bscscan.com/address/0xcD81A218B992f3063A4dce8a7Eee96A322E7b272#readContract

The coupled test script has been provided in `problem-5/check-balance.js`. 
Which is using the deployed contract and scanning a random whale.

If you wish to run the test script locally - to the following:
- Rename `.secrets.bak` file to `.secrets`
- Enter your wallet pass phrase to connect with
- Run `yarn run:problem-5`
- Sample BSC wallet and tokens have been provided to check
