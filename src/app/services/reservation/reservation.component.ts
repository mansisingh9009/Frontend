import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map, Subscriber } from 'rxjs';
import { Reservation } from 'src/app/model/reservation';
import { Room } from 'src/app/model/room';
import { RoomService } from 'src/app/room.service';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
@Injectable()
export class ReservationComponent implements OnInit {
  res: Reservation = new Reservation;
  formValue!: FormGroup
  reservation: any
  roomId: any
  reserv:any={bookingid:'',roomid:'',checkin:'',checkout:'',noofguest:'',totalpayment:''}
  constructor(private rooom: RoomService, private reservationService: ReservationService, private formBuilder: FormBuilder, private api: ReservationService) { }

  ngOnInit() {
    this.formValue = this.formBuilder.group({
      bookingid: [''],
      roomid: [''],
      checkin: [''],
      checkout: [''],
      noofguest: [''],
      totalpayment: ['']
    })
    this.getReservations();
    this.addReservations();
    this.updateReservations();
   

    this.rooom.getRoomList();
    

  }
  getReservations() {
    this.reservationService.getReservationList().subscribe(data => {
      console.log(Object.values(data.resList));
      this.reservation = data.resList;
    });
  }
  addReservations() {
    if((this.reserv.bookingid!=null&& this.reserv.oomid!=null&&this.reserv.checkin!=null&&this.reserv.checkout!=null&&this.reserv.noofguest!=null&&this.reserv.totalPayment!=null)
    &&(this.reserv.bookingid!=''&& this.reserv.oomid!=''&&this.reserv.checkin!=''&&this.reserv.checkout!=''&&this.reserv.noofguest!=''&&this.reserv.totalPayment!=''))
  {
    this.reservationService.addReservationList(this.reservation).subscribe(data => {
    this.reservation = data.resList;
    });
  }
  else{
    // alert("fields are empty!!");
    console.log("Fields are empty!!");
  }
  }

  updateReservations() {
    this.reservationService.updateReservationList(this.reservation).subscribe(data => {
      this.reservation = data.resList;
    });
  }

  deleteReservations() {
    this.reservationService.deleteReservationList().subscribe(data => {
      this.reservation = data.resList;
    })
  }
  addResto() {
    this.res.bookingId = this.formValue.value.bookingid;
    this.res.roomId = this.formValue.value.roomid;
    this.res.checkin = this.formValue.value.checkin;
    this.res.checkout = this.formValue.value.checkout;
    this.res.numOfGuests = this.formValue.value.noofguest;
    this.res.finalPrice = this.formValue.value.totalpayment;

    this.api.addReservationList(this.res).subscribe(data => {
      console.log(data.resList);
      let ref = document.getElementById('clear');
      ref?.click();

      this.formValue.reset;
      this.getReservations;

    })
  }
  // reservation:Reservation
  onEditRes(data:any) {
    this.formValue.controls['bookingid'].setValue(data.bookingId);
    this.formValue.controls['roomid'].setValue(data.roomId);
    this.formValue.controls['checkin'].setValue(data.checkin);
    this.formValue.controls['checkout'].setValue(data.checkout);
    this.formValue.controls['noofguest'].setValue(data.numOfGuests);
    this.formValue.controls['totalpayment'].setValue(data.finalPrice);

    
  }
}
