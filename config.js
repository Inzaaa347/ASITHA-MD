const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=bvwCVJ5Y#AZihM8iaDReoX_ME7ociEnV06kEQLb-hJFovSmQT840",
MONGODB: process.env.MONGODB || "mongodb+srv://teamdaxx123:teamdaxx123@cluster0.ysbpgcp.mongodb.net/?retryWrites=true&w=majority",//enter mongo db url
};
