import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ActionEvent, ProductActionsTypes } from '../../../state/product.state';

@Component({
  selector: 'app-product-navbar',
  templateUrl: './product-navbar.component.html',
  styleUrls: ['./product-navbar.component.css']
})
export class ProductNavbarComponent implements OnInit {

  @Output() productEventEmitter : EventEmitter<ActionEvent> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onGetAllProducts(){
    this.productEventEmitter.emit({type:ProductActionsTypes.GET_ALL_PRODUCTS, payload:null}); //J'envoie un message au composant parent
  }

  onGetSelectedProducts(){
    this.productEventEmitter.emit({type:ProductActionsTypes.GET_SELECTED_PRODUCTS});
  }

  onGetAvailableProducts(){
    this.productEventEmitter.emit({type:ProductActionsTypes.GET_AVALAIBLE_PRODUCTS});
  }

  onNewProduct(){
    this.productEventEmitter.emit({type:ProductActionsTypes.NEW_PRODUCTS, payload:null});
  }

  onSearch(dataForm: any){
    this.productEventEmitter.emit({type:ProductActionsTypes.SEARCH_PRODUCTS, payload:dataForm});
  }

}
