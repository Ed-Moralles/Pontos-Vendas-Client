import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UiUtilsProvider } from '../../providers/ui-utils/ui-utils';
import { HttpdProvider } from '../../providers/httpd/httpd';
import { DataInfoProvider } from '../../providers/data-info/data-info';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-cash-drain',
  templateUrl: 'cash-drain.html',
})
export class CashDrainPage {

  @ViewChild('inputPassword') inputPassword;
  @ViewChild('inputEnd') inputEnd;

  supervisorPassword: string = ""
  supervisorUsername: string = ""
  supervisorId: number = 0    
  supervisorInfo: any = []

  cashDrainTotal: number = 0
  allSupervisors: Observable<any>;

  constructor(public navCtrl: NavController, 
    public dataInfo: DataInfoProvider,    
    public httpd: HttpdProvider,
    public uiUtils: UiUtilsProvider,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getSupervisorInfo()  
  } 
    
  goBack(){
      this.navCtrl.pop()
  }

  getSupervisorInfo(){
    
    this.allSupervisors = this.httpd.getAuthSupervisor()

    this.allSupervisors
    .subscribe( data => {
        console.log(data)
        this.supervisorInfo = data.success
    }); 
  }    

  focusPassword(){    
    this.inputPassword.setFocus()
  }

  checkSupervisorInfo(){

    let checked = false

    this.supervisorInfo.forEach(element => {
      
      if(element.login_usuarios === this.supervisorUsername) {
        if(element.senha_usuarios_pdvi == this.supervisorPassword){
          checked = true      
          this.supervisorId = element.id_usuarios          
        }          
      }
        
    });

    return checked;
  }

  finish(){        

    if(! this.checkSupervisorInfo())      
      this.uiUtils.showAlert(this.dataInfo.titleWarning, this.dataInfo.titleAuthError).present()

    else 
      this.confirm()             
  }

  confirm(){
    let loading = this.uiUtils.showLoading(this.dataInfo.titlePleaseWait)    
    loading.present() 
    var self = this

    this.httpd.confirmCashDrain(this.dataInfo.userInfo.id_usuarios, this.supervisorId, this.cashDrainTotal)

    .subscribe( data => {
      this.finishOperation(data)      
      loading.dismiss()      

    }, error => {
      loading.dismiss().then( () => {

        self.uiUtils.showAlert(this.dataInfo.titleWarning, this.dataInfo.titleCashDrainError).present()
      });
    });

  }

  finishOperation(data){

    var self = this
    let alert = this.uiUtils.showAlert(this.dataInfo.titleSuccess, this.dataInfo.titleCashDrainSuccess)
      
      alert.present()
      .then( () => {
        setTimeout(function(){
          alert.dismiss();
          self.navCtrl.pop()
        }, 3000);        
      })
  }

}
