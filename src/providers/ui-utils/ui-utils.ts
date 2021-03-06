import { AlertController, LoadingController  } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class UiUtilsProvider {

  constructor(public alertCtrl: AlertController, 
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController) {
    
  }

  showLoading(title: string){
    let loading = this.loadingCtrl.create({
      content: title
    });

    return loading
  }

  showAlertSuccess(){
    let alert = this.showAlert("Sucesso", "Operação realizada com sucesso!")
      
    return alert.present()
    .then( () => {
      setTimeout(function(){
        alert.dismiss();
      }, 3000);        
    })
  }

  showAlert(title_: string, subtitle_: string) {
    
    let alert = this.alertCtrl.create({
      title: title_,
      subTitle: subtitle_,
      
      enableBackdropDismiss: false,
      buttons: ['OK']
    });
    
    return alert
  }

  showConfirm(title_: string, subtitle_: string): Promise<boolean> {
    return new Promise((resolve, reject) =>{
      this.alertCtrl.create({
        title: title_,
        message: subtitle_,
        
        enableBackdropDismiss: false,
        buttons: [{
            text: 'Não',
            handler:_=> resolve(false)            
          },
          {
            text: 'Sim',
            handler:_=> resolve(true)
          }
        ]
      }).present()
  })
    
  }


  

  showToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 4000,
      position: 'bottom'
    });

    toast.present(toast);
  }

  

}