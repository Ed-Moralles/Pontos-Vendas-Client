import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { UiUtilsProvider } from '../../providers/ui-utils/ui-utils';
import { HttpdProvider } from '../../providers/httpd/httpd';
import { DataInfoProvider } from '../../providers/data-info/data-info';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment-timezone';

@IonicPage()
@Component({
  selector: 'page-cash-statement',
  templateUrl: 'cash-statement.html',
})

export class CashStatementPage {

  chage: Observable<any>;
  drain: Observable<any>;
  tickets: Observable<any>;

  dayBegin: string = "";
  dayEnd: string = ""

  totalChange: number = 0
  totalDrain: number = 0
  totalTicket: number = 0
  totalAll: number = 0

  constructor(public navCtrl: NavController, 
    public dataInfo: DataInfoProvider,    
    public httpd: HttpdProvider,
    public uiUtils: UiUtilsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CashStatementPage');

    this.dayBegin = moment().startOf('day').format()      
    this.dayEnd = moment().endOf('day').format()

    this.startInterface()
  }

  goBack(){
    this.navCtrl.pop()
  }

  startInterface(){
    this.getChangeUser()        
  }

  getChangeUser(){
    this.chage = this.httpd.getCashChange(this.dataInfo.userInfo.id_usuarios, this.dayBegin, this.dayEnd)

    this.chage.subscribe(data => {      
      this.getChangeUserCallback(data)
    })
  }

  getChangeUserCallback(data){
    this.totalChange = data.success[0].TOTAL
    this.getDrainUser()
  }

  getDrainUser(){
    this.drain = this.httpd.getCashDrain(this.dataInfo.userInfo.id_usuarios, this.dayBegin, this.dayEnd)

    this.drain.subscribe(data => {
      this.getDrainUserCallback(data)
    })
  }

  getDrainUserCallback(data){
    this.totalDrain = data.success[0].TOTAL
    this.getTicketUser()
  }

  getTicketUser(){
    this.tickets = this.httpd.getTotalTickets(this.dataInfo.userInfo.id_usuarios, this.dayBegin, this.dayEnd)

    this.tickets.subscribe(data => {
      this.getTicketUserCallback(data)
    })
  }

  getTicketUserCallback(data){
    this.totalTicket = data.success[0].TOTAL

    this.calcTotal()
  }

  calcTotal(){
    
    this.totalAll = this.totalChange + this.totalTicket - this.totalDrain

    console.log(this.totalChange, this.totalAll)

  }

}
