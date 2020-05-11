
console.log('Running');

var qrdata = document.getElementById('user-input');
var qrCode = new QRCode(document.getElementById('qrcode'));



function generateQR() {
    console.log('onchange ran');

    var data = QRdata.value;

    QRCode.makeCode(data);




}