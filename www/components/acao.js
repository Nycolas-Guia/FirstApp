// This is a JavaScript file
function retorno(){
  
}

function retorno2(buttonIndex) {
  if(buttonIndex == 1){
  navigator.notification.alert("Sim");
  navigator.notification.beep(1);
}else{
  navigator.notification.alert("Não");
  navigator.notification.beep(2);
}
}

$(document).on("click","#alerta",function(){
 // navigator.notification.alert("Olá Mundo - Primeiro App!",retorno,"Aviso!","ok!");
  //navigator.notification.beep(2);

  navigator.notification.confirm("Escolha uma opção!",retorno2,"Titulo",['Sim','Não']);
});

$(document).on("click","#co",function(){
    $(location).attr("href","index.html");
});

$(document).on("click","#codigo",function(){
   cordova.plugins.barcodeScanner.scan(
      function (result) {
                 if(result.text == 280720550){
                      $(location).attr("href","produto.html");
                 }else if(result.text == 989895555){
                      $(location).attr("href","produto1.html")
                 }else if(result.text == 85236987){
                      $(location).attr("href","produto2.html")
                 }else if(result.text == 85369877444){
                      $(location).attr("href","produto3.html")
                }
                else{
                  alert("CÓDIGO INVALIDO!!!")
                }
                   
                 
      } ,        
      function (error) {
          alert("Scanning failed: " + error);
      },
      {
          preferFrontCamera : false, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: false, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417,CODE_39", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
      }
   );
 });
