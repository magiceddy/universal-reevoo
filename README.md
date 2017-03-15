# Universal Reevoo 

This is an alpha version of Universal Reevoo.
You can log into the app with Uport. If you don't have it visit [Uport](https://www.uport.me/)

## Installation

1. Install truffle and an ethereum client. For local development, try EthereumJS TestRPC.
    ```javascript
    npm install -g truffle // Version 3.0.5+ required.
    npm install -g ethereumjs-testrpc
    ```

2. Clone or download the repo.
    ```javascript
    git clone [repo]
    ```

3. Install the node dependencies.
    ```javascript
    npm install
    ```
4. Run testrpc with nvm > 6.9.
    ```javascript
    testrpc
    ```

4. Compile and migrate the contracts.
    ```javascript
    truffle compile
    truffle migrate
    ```

5. Run the webpack server for front-end hot reloading. For now, smart contract changes must be manually recompiled and migrated.
    ```javascript
    npm run start
    ```

6. Jest is included for testing React components and Truffle's own suite is incldued for smart contracts. Be sure you've compile your contracts before running jest, or you'll receive some file not found errors.
    ```javascript
    // Runs Jest for component tests.
    npm run test

    // Runs Truffle's test suite for smart contract tests.
    truffle test
    ```

7. To build the application for production, use the build command. A production build will be in the build_webpack folder.
    ```javascript
    npm run build
    ```

## FAQ

* __May I use the project without Uport?__

    Switch to ```feature/product-form``` branch

* __I can't register products.__

    ```Product code``` must be an integer

## TODO

- [ ] Test
- [ ] Kovan testnet
- [ ] More Contracts
- [ ] Fix ui
- [ ] Better UX
- [ ] ENS
- [ ] Dapple
- [ ] DappHub
- [ ] Infura
- [ ] Security [Electron + Metamask](https://blog.aragon.one/electron-metamask-secure-easy-to-use-dapps-5a9987d21034#.v4b78wf78) 
- [ ] ...
