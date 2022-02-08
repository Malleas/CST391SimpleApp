import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Input() name: string | undefined

  quantity: number | undefined
  products: string[] | undefined
  selectedProduct: string | undefined

  onSubmit(){
    console.log("The quantity is: " + this.quantity)
    console.log("The selected product is: " + this.selectedProduct)
  }

  newInfo(){
    this.quantity = 0
    this.selectedProduct = undefined;
    console.log("Values reset")
  }

  constructor() { }

  ngOnInit(): void {
    this.quantity = 0;
    this.products = ["Empire Strikes Back", "Return of the Jedi", "New Hope"];
    this.selectedProduct = "unknown"
  }

}
