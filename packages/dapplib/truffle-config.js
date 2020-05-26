require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture gloom bubble tooth notice crime remain minor heavy clock forward gate'; 
let testAccounts = [
"0x7460c678b8f37b87b9e166b7bb8ebadb244d9cb3af54a787a71a1391a976a5e9",
"0x32fb8abb64a05a72cc1c2455926ebf1ed3c6d248eb2c8b7948bf8050407af5a8",
"0x1ce1486bb2a6e4cfcc2dcda3c52c7c47c73d250332d1dea2823665199da86cc9",
"0x424b3ed98740cb2d69bd21f2f53917e5121e3fbe3781b85daf08997babca6c08",
"0x4438ee664391f853fc2bc5230da9d5cdbf5f6ffec048d64dc8bd2e56b611e6d8",
"0x23c0b0b0d85de54c5147da79e28e7b662d5efc3f58cf1b8777e27073bfa7d570",
"0xfaaf28c6e823f55bb527e46be07a030fde74f1bebc6b7a1231417128c3c49b79",
"0x7e854b170d036a63c8c07c39f0986bda7ae204e01f7806b97f5823b185f8701a",
"0x8f0dc0397599afafdb8ae0e64a6444ebfef0ffaf1cd82adb468f0e19401e5fc6",
"0x2f965826992feef42b645ce3453a280066e272ac2c5868efef9cb362552e1ad0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
