var rsa =require("node-rsa");
var fs=require("fs");

var publicKey=new rsa();
var privateKey=new rsa();

var public =fs.readFileSync("./Keys/public.pem","utf8");
var private =fs.readFileSync("./Keys/private.pem","utf8");


publicKey.importKey(public);
privateKey.importKey(private);

function CreateLic(mail){
    // const saltFirst="khvjkhbkb"
    // const saltSecond="FOR “12kiid”"


    const encrpyted =privateKey.encryptPrivate(mail,"base64");
    return encrpyted;
    
}

g="Bk2ZqM5VqnNeNt57BCXJ7x2ab/Mv854I4j3B2CxV73VBC+5taR2TNkYGTEu/2hnhu+GYJuHj7vscc6Kj+GlfTgKxNGdupZeOGGl8SoSWJaoJoELENlsufb2/JQkgzxPNsGo+KhZRSVPsqLu3aHCAsZMqmmDYNW1ZEqU+GGV2vp7IxlPNHeS4lpeBg/QqCL5j+tiJ4gGxT5+WWwBAEZkuVF5UObPUsvv4l1G6egPS/r3IzhCk9n222wLtBkLYuWdG0Tz5XrxGj+QkE4NGXY8z3VDpEyhU2BVC3GRbSFp0Huqgji/dhNd7q/bL3Hnkv0C/oTm/n+tOdM1KYC3BjoTJHQ==";


checkValidity(g);


//console.log(CreateLic(559981899819))
function checkValidity(license){

const dcry=publicKey.decryptPublic(license ,"utf8")

console.log(dcry);
}