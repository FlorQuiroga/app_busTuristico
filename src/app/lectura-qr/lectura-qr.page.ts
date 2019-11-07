import { Component, OnInit } from '@angular/core';
import { BarcodeScanner,BarcodeScannerOptions  } from '@ionic-native/barcode-scanner/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { ToastController } from '@ionic/angular';
//import { NativeGeocoder,NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-lectura-qr',
  templateUrl: './lectura-qr.page.html',
  styleUrls: ['./lectura-qr.page.scss'],
})
export class LecturaQRPage implements OnInit {
  /*VARIABLES DE LOCALIZACIN*/
 latitud:number;
 longitud:number;

  /*FIN GEOLOCALIZACION*/ 

qrData="http://www.google.com";
scannedCode= null;
elementType:'url'|'canvas'| 'img'='canvas';
public objectJson: Array<string>
  constructor(private barcodeScanner:BarcodeScanner,private base64ToGallery:Base64ToGallery,
    private toastCtrl:ToastController,
    private geolocation: Geolocation
    ) { }

  ngOnInit() {
  }

 
//Stop location update watch


  scanCode(){
    /*caracteristicas de como queremos que se abra la camra
    preferFrontCamera : true, // iOS and Android
showFlipCameraButton : true, // iOS and Android
showTorchButton : true, // iOS and Android
torchOn: true, // Android, launch with the torch switched on (if   available)
saveHistory: true, // Android, save scan history (default false)
prompt : "Place a barcode inside the scan area", // Android
resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
    */
    const options: BarcodeScannerOptions = {
      preferFrontCamera: true,
      showFlipCameraButton: true,
      showTorchButton: true,
      torchOn: false,
      prompt: 'Place a barcode inside the scan area',
      resultDisplayDuration: 500,
      formats: 'QR_CODE,PDF_417 ',
      orientation: 'landscape',
    };


    this.barcodeScanner.scan().then((barcodeData) => {
    //  this.scannedCode = barcodeData;
      this.scannedCode = barcodeData.text;
  
      this.localizacion();
    }).catch(err => {
      console.log('Error', err);
    });

  

/*this.barcodeScanner.scan().then(

  barcodeData=>{
    alert(barcodeData);
  this.scannedCode=barcodeData;
}

)*/
  }

  localizacion(){
  /* this.geolocation.getCurrentPosition(resp => {
      this.latitud=  resp.coords.latitude,
     this.longitud=  resp.coords.longitude
    }, err => { console.log(err)});*/
    
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitud=resp.coords.latitude
      this.longitud= resp.coords.longitude
      alert(this.latitud)
      alert(this.longitud)
     }).catch((error) => {
       console.log('Error getting location', error);
       alert(error)
     });

  }
}
