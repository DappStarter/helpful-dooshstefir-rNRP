require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth museum unknown inflict drum tackle slide'; 
let testAccounts = [
"0xa6bca8945b455e9ff66c46b4a14b2a9dc9c600b27255b69d90e0b0a10038cff0",
"0xb5078e179c0151879658c7cf4993dd673a8be11f6e6558c0b4f5fb53d0197718",
"0xd919fd3a464a1d3f3bf77ca1c45db183a02acfee01591844d0021ebc7da548e6",
"0x538755da645a00b665060138c1869349e25a52c4e7716d819167dcff0f342acd",
"0x0f08318b677ebeda7375d1626c0ca7b61c314daef83f66be4a99ff0340be351b",
"0x36423dbefbef4d3d166cba1d4c16466d4d779aa5b0734c07452813408c4ebc5a",
"0xaccdfcd40c10f7b17e79970861ac66bf51069251c4426e97e2310015c6f64b10",
"0x0c9520533c8d4301ca885c798bb51052ac88b380ae28cd462c983f8ff7c40d0c",
"0x9ea017c4a26fda78dc37ebf981eca248b3b9ce74346be2cab240c22d8a4c3637",
"0xdcafac9219fd12a0cc589baa5a2ad3bb0ba32de3a6c5d1a4f8c995245ca7fc0d"
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
            version: '^0.8.0'
        }
    }
};

