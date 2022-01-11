import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Payment } from './payment';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  res:Payment = new Payment;
  payment: any 
  formValue!: FormGroup 
  constructor(private ps:PaymentService, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.formValue=this.formBuilder.group({
      name:[''],
      cvv:[''],
      cardno:['']
      
    })
    this.addPayment();
  }
 
  addPayment(){
    this.ps.addPaymentList(this.payment).subscribe(data =>{
      this.payment=data;
      console.log(Object.values(data));
    })
  }

  saveit(){
    window.open('/success');
  }

  getPayment(){
    this.ps.getPaymentList(this.payment).subscribe(data =>{
      this.payment=data;
    })

  }
  
  addPayTo() {
    this.res.name = this.formValue.value.name;
    this.res.cvv = this.formValue.value.cvv;
    this.res.cardNo = this.formValue.value.cardno;
    
    
    this.ps.addPaymentList(this.res).subscribe(data => {
      console.log(data);
      let ref = document.getElementById('clear');
      ref?.click();

      this.formValue.reset;
    })
  }
}
