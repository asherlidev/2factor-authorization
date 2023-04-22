import CryptoJS   from 'crypto'
const secretKey = process.env.encryptionKey;
export const encryptdata =(req,res,next)=>{
    const originalSend = res.send;
    res.send = (data) => {
        // Convert response data to string
        const strData = JSON.stringify(data);

        // Encrypt the data
        const cipher = crypto.createCipher('aes-256-cbc', secretKey);
        let encryptedData = cipher.update(strData, 'utf8', 'hex');
        encryptedData += cipher.final('hex');

        // Set the encrypted data as the response
        originalSend.call(this, encryptedData);
    };
}
export const decryptdata=(req,res,next)=>{
    const decipher = crypto.createDecipher('aes-256-cbc', secretKey);
    let decryptedData = decipher.update(encryptedData, 'hex', 'utf8');
    decryptedData += decipher.final('utf8');
    return decryptedData;
}