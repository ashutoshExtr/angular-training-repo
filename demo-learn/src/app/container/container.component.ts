import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  // name:"John M";
  // addToCart:number = 0;
  // product = {
  //   name: 'iPhone X',
  //   price: 789,
  //   color: 'Black',
  //   discount: 8.5,
  //   inStock: 10,
  //   pImage: 'https://ik.imagekit.io/3dqckpw4d/upload/iphone_12___Purple1657182290iphone-12-purple.png'
  // }

  // getDiscountedPrice() {
  //   return this.product.price - (this.product.price * this.product.discount / 100)
  // }

  // onNameChange(event: any){
  //   this.name = event.target.value;
  //   console.log(event.target.value);
  // }

  // decrementCartValue(){
  //   if(this.addToCart > 0){
  //     this.addToCart--;
  //   }
    
  // }

  // incrementCartValue(){
  //   if(this.addToCart < this.product.inStock){
  //     this.addToCart++;
  //   }
    
  // }

  listOfString: string[] = ['Marly', 'John', 'Edy', 'Casey'];

  searchTextParent: string = '';


  setSearchText(value: any){
    this.searchTextParent = value;
  }

}
