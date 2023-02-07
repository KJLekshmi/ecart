import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from 'src/app/product/productservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchterm:any

 constructor(private ps:ProductserviceService){}

  ngOnInit(): void {}

  search(event:any){
       this.searchterm=event.target.value  //target used to recieved the entired value
       this.ps.search.next(this.searchterm)  // to send to productservice.ts
  }

}
