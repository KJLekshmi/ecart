import { Component, OnInit } from '@angular/core';
import{FormBuilder} from '@angular/forms';
import{Router} from '@angular/router'
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  constructor(private fb:FormBuilder,private ps:ProductserviceService,private router:Router){

  }addProductForm=this.fb.group(  { 
    id: [''],
    productName: [''],
    categoryid:[''],
    description:[''],
    price:[''],
    isAvailable:[''],
    productImage:[''],
    rating:[''],
    review:['']
} )
  ngOnInit():void{}
  addNewProduct(){
    let newProductData={ 
      id:this.addProductForm.value.id,
      productName:this.addProductForm.value.productName,
      categoryid:this.addProductForm.value.categoryid,
      description:this.addProductForm.value.description,
      price:this.addProductForm.value.price,
      isAvailable:this.addProductForm.value.isAvailable,
      productImage:this.addProductForm.value.productImage,
      rating:this.addProductForm.value.rating,
      review:this.addProductForm.value.review
  } 
  this.ps.addProduct(newProductData).subscribe((item:any)=>{
    alert('product added successfully')
    this.router.navigateByUrl('product')

  })
  }

}
