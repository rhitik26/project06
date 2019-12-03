import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { format } from 'url';
import { HttpClientService, Cook,NGO, Foodie } from '../service/http-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  foodie: Foodie = new Foodie("","","","","","","","");
  ngo: NGO=new NGO("","","","","","","","",[]);
  op=document.getElementsByName('c');
  constructor(private router: Router) { }

  ngOnInit() {
    const email=document.getElementsByName('email');
    const password=document.getElementsByName('pass');
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    

    signUpButton.addEventListener('click', () => {
        container.classList.add('right-panel-active');
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
    });
  }
  signinCook(){

  }
  signinop(form:NgForm){
    if(form.controls['c'].value=='ngo'){
      this.router.navigateByUrl('homengo/'+this.ngo.orgName)
    }
     else if(form.controls['c'].value=='foodie'){
      this.router.navigateByUrl('homeCook'+this.foodie.foodieName);
    }
  }

}
