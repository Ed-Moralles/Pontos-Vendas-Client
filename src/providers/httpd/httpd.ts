import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpdProvider {
  
  address : string = 'http://localhost:8085'
  contentHeader: Headers = new Headers({'Content-Type': 'application/json'});
  totemId: number = 1
  
  constructor(public http: HttpClient) {
    console.log('Hello HttpdProvider Provider', this.address);    
  }  

  GET(url) {
    return this.http.get(url);
  }

  getAllOrders(start_, end_){    
    let myData = JSON.stringify({id: this.totemId, start: start_, end: end_});
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.address  + "/getAllOrders", myData, {headers: headers})
  }

  getAllOrdersByName(str_, start_, end_){    
    let myData = JSON.stringify({id: this.totemId, name: str_, start: start_, end: end_});
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.address  + "/getAllOrdersByName", myData, {headers: headers})
  }

  getAllOrdersByCPF(str_, start_, end_){    
    let myData = JSON.stringify({id: this.totemId, name: str_, start: start_, end: end_});
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.address  + "/getAllOrdersByCPF", myData, {headers: headers})
  }

  getOrdersNotCompleted(){    
    let myData = JSON.stringify({id: this.totemId});
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.address  + "/getOrdersNotCompleted", myData, {headers: headers})
  }

  sendEmail(idTicket_, email_){    
    let myData = JSON.stringify({idTicket: idTicket_, email: email_});
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.address  + "/sendEmail", myData, {headers: headers})
  }

  printTicket(idTicket_){    
    let myData = JSON.stringify({idTicket: idTicket_});
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.address  + "/printTicket", myData, {headers: headers})
  }

  getAreas(){    
    let myData = JSON.stringify({id: this.totemId});
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.address  + "/getAreas", myData, {headers: headers})
  }

  getAreasByName(name_){    
    let myData = JSON.stringify({id: this.totemId, name: name_});
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.address  + "/getAreasByName", myData, {headers: headers})
  }

  getProductsArea(idArea_){    
    let myData = JSON.stringify({id: this.totemId, idArea: idArea_});
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.address  + "/getProductsArea", myData, {headers: headers})
  }

  getProductsAreaByName(name_, idArea_){    
    let myData = JSON.stringify({id: this.totemId, name: name_, idArea: idArea_});
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.address  + "/getProductsAreaByName", myData, {headers: headers})
  }

  payProducts(idPayment_, products_){
    let myData = JSON.stringify({id: this.totemId, idPayment: idPayment_, products: products_});
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.address  + "/payProducts", myData, {headers: headers})
  }

  getSubtypesProducts(idProduct_){    
    let myData = JSON.stringify({id: this.totemId, idProduct: idProduct_});
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.address  + "/getSubtypesProducts", myData, {headers: headers})
  }

  getAuth(email_, password_){    
    let myData = JSON.stringify({id: this.totemId, email: email_, password: password_});
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.address  + "/getAuth", myData, {headers: headers})
  }

}