const QRCode = require("qrcode");

async function generateCode() {
    const urlSite = "http://144.22.168.166:3000/"
    const qrCodeData = `${urlSite}`;
  
    
      try{
        const url = await QRCode.toDataURL(qrCodeData);
      return url;
      }catch(error){
        throw new Error('Erro ao gerar o código QR.');
      }
   
  }

 let code = await generateCode();

console.log(code);