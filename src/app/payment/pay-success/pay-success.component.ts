import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay-success',
  templateUrl: './pay-success.component.html',
  styleUrls: ['./pay-success.component.css']
})
export class PaySuccessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onPay(){
    let ref = document.getElementById('clear');
    ref?.click();
    alert('Room Booked!!!')
  }

}
