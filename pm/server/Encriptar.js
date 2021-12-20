const crypto = require('crypto');
const secreto = 'misecretomisecretomisecretomisec';

const encriptar = (password) => {
  const iv = Buffer.from(crypto.randomBytes(16));
  const cifrado = crypto.createCipheriv('aes-256-ctr',Buffer.from(secreto),iv);

  const passwordEncriptado = Buffer.concat([cifrado.update(password),cifrado.final()]);

  return {iv: iv.toString("hex"), password: passwordEncriptado.toString("hex")};
};

const decriptar = (encryption) => {
  const decifrado = crypto.createDecipheriv('aes-256-ctr',Buffer.from(secreto),Buffer.from(encryption.iv,"hex"));

  const passwordDecriptado = Buffer.concat([
    decifrado.update(Buffer.from(encryption.password, "hex")),
    decifrado.final(),
  ]); 

  return passwordDecriptado.toString()
}

module.exports = {encriptar,decriptar}