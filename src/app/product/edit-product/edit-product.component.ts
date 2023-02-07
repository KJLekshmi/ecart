import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';
import { ViewProductComponent } from '../view-product/view-product.component';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productid: any
  productdata: any
  constructor(private ar: ActivatedRoute, private ps: ProductserviceService,private router:Router) {  //activated route-to take data fom url

  }
  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {
      this.productid = data['id']
    })
    this.ps.viewproduct(this.productid).subscribe((item: any) => {
      this.productdata = item
    })
  }
  updateProduct(form: any) {
    let updateproduct = {
      id: form.value.id,
      productName: form.value.productid,
      categoryid: form.value.categoryid,
      description: form.value.description,
      price: form.value.price,
      isAvailable: form.value.isAvailable,
      productImage: form.value.productImage,
      rating: form.value.rating,
      review: form.value.review

   }
   this.ps.updateproduct(this.productid,this.productdata).subscribe((data:any)=>{
    alert("product details update")
    this.router.navigateByUrl("product")
   })
  }
 
}
