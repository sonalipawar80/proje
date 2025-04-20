import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/mobileProd';

@Component({
  selector: 'app-mobile-product',
  templateUrl: './mobile-product.component.html',
  styleUrls: ['./mobile-product.component.scss']
})
export class MobileProductComponent implements OnInit {
  @Input() mobArr!:Product;
  isQuntity:number=1;
  isflaverit:boolean=false
  arr:Array<number>=[1,2,3,4,5];
  isSelectedTab:string='productdetails'

// returnCount:Array<number>=[]

  maxStars: number = 5;

ngOnInit(): void {

  // this.mobileProd.forEach(prod => {
  //   this.returnCount.push( this.getStarRating(prod.reviews_count))
  // });
  // console.log(this.returnCount)
}




decreaseQ(){
if(this.isQuntity>1){
  this.isQuntity--
}
}
increaseQ(){
  this.isQuntity++;
}
onchangeColor(){
  this.isflaverit=!this.isflaverit

}


}

