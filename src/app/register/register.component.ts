import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClientService, Cook,NGO, Foodie } from '../service/http-client.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  cook: Cook = new Cook("", "", "", "", "", "", "", "","","",[]);
  foodie: Foodie = new Foodie("","","","","","","","");
  ngo: NGO=new NGO("","","","","","","","",[]);
  form=new FormGroup({
    name:new FormControl('',Validators.required)
  })

  constructor(private router: Router, private httpClientService: HttpClientService) { }

  ngOnInit() {
  }
 createNgo():void{
   this.httpClientService.createOrg(this.ngo)
   .subscribe(data=>
    {alert("Ngo Added Successfully.");
  });
 }
  
  createCook(): void {
    this.httpClientService.createCook(this.cook)
      .subscribe(data => {
        alert("Cook added successfully.");
      });
  }
  createFoodie(): void {
    this.httpClientService.createFoodie(this.foodie)
      .subscribe(data => {
        alert("Foodie added successfully.");
      });
  }
  onSubmit(form: NgForm) {

    if (form.controls['recom'].value == 'Foodie') {
      this.createFoodie();
      this.router.navigateByUrl('/homeCook/' +this.foodie.foodieName);
    }
    else if (form.controls['recom'].value == 'Cook') {
      this.cook.cooklocation = this.cook.cookcity
      this.createCook();
      this.router.navigateByUrl('/homec/' + this.cook.cookname);
    }
    else if (form.controls['recom'].value == 'NGO') {
      // this.cook.cooklocation = this.cook.cookcity
      // this.createCook();
      this.createNgo();
      this.router.navigateByUrl('/homengo/' + this.ngo.orgName);
    }
  }
  
}
