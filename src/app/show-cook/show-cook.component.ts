import { Component, OnInit } from '@angular/core';
import { Cook } from '../service/http-client.service'
import { HttpClientService } from '../service/http-client.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-show-cook',
  templateUrl: './show-cook.component.html',
  styleUrls: ['./show-cook.component.css']
})
export class ShowCookComponent implements OnInit {
  
  constructor(private httpClientService:HttpClientService,private router: ActivatedRoute) { }
  cook:Cook=new Cook("","","","","","","","","","",[]);
  ngOnInit() {
    this.router.params.subscribe(params => {
      this.cook.cookname=params.cookusername;
      console.log(params.cookusername); 
    });
    
    this.httpClientService.getCookByName(this.cook).subscribe(response => {
      console.log('response');
      console.log(this.cook.cookusername)
      console.log(response);
      // this.x = response;
      console.log(this.cook);
    })
  }

}

