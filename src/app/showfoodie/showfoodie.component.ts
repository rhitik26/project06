import { Component, OnInit } from '@angular/core';
import { HttpClientService, Foodie } from '../service/http-client.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-show-foodie',
  templateUrl: './showfoodie.component.html',
  styleUrls: ['./showfoodie.component.css']
})
export class ShowFoodieComponent implements OnInit {
  // f: Foodie = { foodieId: "", foodieName: "", foodieEmail: "", foodiePassword: "", foodieCity: "", foodieAddress: "", foodiePhone: "", foodieZip: "", f: ""}
  foodieId: string;
  foodies:Foodie[]
  foodie:Foodie = new Foodie("","","","","","","","")
  dfoo:Foodie
  
  constructor(private httpclientservice: HttpClientService, private router: ActivatedRoute) { }
  
  ngOnInit() {
    this.foodieId=this.router.snapshot.paramMap.get("foodieId")
    
    this.httpclientservice.getFoodie().subscribe(response => {
       this.foodies=response
       console.log(this.foodies)
       this.foodies.forEach(item=>{
         if(item.foodieName==this.foodieId)
         {
            this.foodie=item
           
         }
       })
       console.log(this.foodie)
       this.dfoo = this.foodie
    })
    
      
      // console.log(this.foodies)
      // this.foodies.forEach(item=>{
      //   if(item.foodieName==this.foodieId)
      //   {
      //      this.foodie=item
          
      //   }
      // })
      // console.log(this.foodie)
   }
  
  deleteFoodie(): void {
    console.log("delete!!!");
    this.httpclientservice.deleteFoodie(this.foodie)
      .subscribe(data => {
        alert("Foodie deleted successfully.");
        this.reset();
      });
  }
reset():void{
  this.foodie.foodieId="";
  this.foodie.foodieName="";
  this.foodie.foodieEmail="";
  this.foodie.foodiePassword="";
  this.foodie.foodieCity="";
  this.foodie.foodieAddress="";
  this.foodie.foodiePhone="";
  this.foodie.foodieZip="";
}

}