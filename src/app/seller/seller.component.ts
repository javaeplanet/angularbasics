import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  sellers:string[];
  hide:boolean;
  constructor() { 
this.hide=true;

    this.sellers=["apple","amazon","flipkart"]
    

  }

  getSellers():string[]{
    return this.sellers;
  }

  toggle(){
   this.hide=!this.hide;
  }

  ngOnInit(): void {
  }

}
