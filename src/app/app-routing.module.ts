import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutusComponent } from './home/aboutus/aboutus.component';
import { GallaryComponent } from './home/gallary/gallary.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaySuccessComponent } from './payment/pay-success/pay-success.component';
import { PaymentComponent } from './payment/payment.component';
import { ReservationComponent } from './services/reservation/reservation.component';
import { RoomComponent } from './services/room/room.component';
import { GuestComponent } from './sign-up/guest/guest.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path:'', redirectTo:'home', pathMatch:'full'
  },
 {
   path:'home',component:HomeComponent
 },
 {
   path:'room',component:RoomComponent
 },
 {
   path:'reservation', component:ReservationComponent
 },
 {
   path:'login',component:LoginComponent
 },
 {
   path:'gallary',component:GallaryComponent
 },
 {
   path:'payment',component:PaymentComponent
 },
 {
   path:'success',component:PaySuccessComponent
 },
 {
   path:'signup',component:SignUpComponent
 },
 {
   path:'guest',component:GuestComponent
 },
 {
   path:'aboutus',component:AboutusComponent
 },
 {
   path:'dashboard',component:DashboardComponent
 },
 {
    path:'contact',component:ContactComponent
 } 

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
