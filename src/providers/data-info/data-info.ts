import { Injectable } from '@angular/core';

@Injectable()
export class DataInfoProvider {
    
  appType: number = 1
  titleGoBack: string = "Voltar"
  userType: any = {name: 'Atendente', email: 'falecom@megaticket.com.br', photo: "assets/imgs/100x100.png"}
  userInfo: any;
  titleAccessDenied: string = "Acesso negado"
  eventPaymentOk: string = 'eventPaymentOk'
  titleAppName: string = "3A PDVi"
  titlePdvi: string = "PDVi"
  titleAddress: string = "Endereço"
  titleParking: string = "Estacionamento"
  titleOnlineSales: string = "Vendas Online"  
  titleCPF: string = "CPF"
  titleModuleOnline: string = "Módulo vendas online"
  titleAtention: string = "Atenção"
  titleStartDateEmpty: string = "Data inicial vazia"
  titleEndDateEmpty: string = "Data final vazia"
  titleCheckDates: string = "Verificar datas"
  titleCancel: string = "Cancelar"
  titleResultEmpty: string = "Resultado vazio"
  titleDayPurschase: string = "Data da compra"
  titleSettings: string = "Configurações"
  titleTicketType: string = "Tipo de ingresso"
  titleCategory: string = "Categorias"
  titleDayStart: string = "Data inicial"
  titleEndStart: string = "Data final"
  titleHistory: string = "Historico"
  titlePleaseWait: string = "Favor aguarde"
  titleEmailSendSuccess: string = "E-mail enviado com sucesso!"
  titlePrintSendSuccess: string = "Impressão enviada com sucesso!"
  titleSendEmailTo: string = "Enviar e-mail para "
  titleTicketOptions: string = " Opções ingresso"
  titleEmail: string = "E-mail"
  titleTicket: string = "Ingresso"
  titleTicketNumber: string = "Número do ingresso"
  titleTicketValue: string = "Valor da compra"
  titleTicketPayDay: string = "Data do pagamento"
  titleTicketPostDay: string = "Data da postagem"
  titleConfirmPrint: string = "Confirmar impressão "
  titleConfirm: string = "Confirmar"
  titlePayed: string = "Pago"
  titleNotPayed: string = "Não Pago"
  titleSearch: string = "Pesquisar"
  titleRemove: string = "Remover"
  titleSearchingClientName: string = "Procurando pelo nome do cliente, favor aguarde"
  titleSearchingClientCPF: string = "Procurando pelo CPF do cliente, favor aguarde"
  titleConfirmMultiPrint: string = "Deseja confirmar impressão multipla?"
  titleStreet: string = "Rua"
  titleNumber: string = "Número"
  titleCity: string = "Cidade"
  titleCEP: string = "CEP"
  titleState: string = "Estado"
  titleEnterPassword: string = "Digite a sua senha"
  titleLoadingInformations: string = "Carregando informações"
  titlePaymentForm: string = "Forma de pagamento"
  titleWarning: string = "Atenção"
  titleLimit: string = "Limite atingido"
  titleValue: string = "Valor"
  titleTotalSelected: string = "Limpar total selecionado"
  titleSave: string = "Salvar"
  titlePay: string = "Pagar"
  titleReceived:  string = "Recebido"
  titleCheckout: string = "Conferir compras"
  titlePaymentSuccess: string = "Pagamento realizado com sucesso!"
  titlePayment: string = "Pagamento"
  titleTotalPayment: string = "Total Recebido: "
  titleTotalChange: string = "Troco: "
  titleFinalValue: string = "Valor final: "
  titleSelectOption: string = "Selecione uma opção"
  titleUsernameMinLenght: string = "Usuário deve ter no mínimo 3 caracteres"
  titleUsername: string = "Usuário"
  titlePasswordMinLenght: string = "Senha deve ter no mínimo 3 caracteres"    
  titleAuthError: string = "Erro de autenticação"
  titleSubproducts: string = "Subtipos de produto"
  titleBasic: string = "Básico"
  titleClientAddress: string = "Endereço comprador"
  titleLogin: string = "Login"
  titleForget: string = "Esqueci a senha"
  titlePassword: string = "Senha"
  titleServer: string = "Servidor"
  titlePrint: string = "Impressão"
  titleRePrint: string = "Reimpressão"
  titleSuccess: string = "Sucesso"
  titlePrintSuccess: string = "Impressão enviada com sucesso"
  titleSelectList: string = "Favor selecionar na lista"
  titlePrintModelA: string = "Impressão modelo A"
  titlePrintModelB: string = "Impressão modelo B"

  constructor() {
    console.log('Hello DataInfoProvider Provider');
  }

}
