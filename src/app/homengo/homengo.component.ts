import { Component, OnInit } from '@angular/core';
import { HttpClientService, Carts, NGO } from '../service/http-client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homengo',
  templateUrl: './homengo.component.html',
  styleUrls: ['./homengo.component.css']
})
export class HomengoComponent implements OnInit {
  cooks:string[];
  orgName:string;
  carts:Carts=new Carts("","","","");
  org:NGO=new NGO("","","","","","","","",[]);
  constructor(private httpClientService: HttpClientService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.orgName = this.route.snapshot.paramMap.get("orgName")
    this.httpClientService.getCooks().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.cooks = response;
  }
  updateNgo():void{
    console.log(this.carts.foodid,this.carts.foodquant,this.carts.foodprice);
    
    this.org.carts.push(this.carts)
    console.log("hey added");
    
    this.httpClientService.updateNgo(this.org)
    .subscribe(data =>{
      alert("Cart Updated Succesfully!");
      });
      this.org.carts.pop();
    }
}
