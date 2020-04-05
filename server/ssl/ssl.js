/***
  For Documentation
  https://www.npmjs.com/package/selfsigned
*/
/* eslint-disable no-console */
const fs   = require('fs');
const path = require('path');

const selfsigned  = require('selfsigned');
const certificate = selfsigned.generate([{
  name: 'commonName',
  value: 'emigatron'
}],{
  keySize: 2048,
  days: 1,
  algorithm: 'sha256',
  extensions: [{ name: 'basicConstraints', cA: true }],
  pkcs7: true,
  clientCertificate: true,
  clientCertificateCN: 'Emin Muhammadi'
});

fs.writeFile('key.pem', certificate.private ,function (err) {
  if (err) return console.log(err);
});
fs.writeFile('cert.pem', certificate.cert,function (err) {
  if (err) return console.log(err);
});

module.exports = {
  key:path.join(__dirname, 'key.pem'),
  crt:path.join(__dirname, 'crt.pem')
};
