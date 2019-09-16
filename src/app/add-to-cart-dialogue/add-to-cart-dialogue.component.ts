import { Component, OnInit} from '@angular/core';
import {products} from '../products';

@Component({
  selector: 'app-add-to-cart-dialogue',
  templateUrl: './add-to-cart-dialogue.component.html',
  styleUrls: ['./add-to-cart-dialogue.component.css']
})
export class AddToCartDialogueComponent implements OnInit {
  
  products = products; 
  arrayOfProducts  = new Array(); 
  public cartCount : number  = 0 ; 
   
  constructor() { }

  addToCart(){
    this.cartCount += 1; 
    var output = "Added " + this.cartCount + " to cart"; 
    window.alert(output);
    
  }

  ngOnInit() {
    

  }

}