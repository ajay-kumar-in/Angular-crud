import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IDeactivateGuard } from 'src/app/shared/guards/auth.guard';
import { ProductService } from '../services/product.service';
// import { IDeactivateGuard } from 'src/app/shared/guards/navigate-away.guard';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit, IDeactivateGuard {
  productForm: any;
  imagePreview!: string;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      originalPrice: new FormControl('', [Validators.required]),
      discount: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      imagePath: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
    })
  }

  canExit(): boolean {
    if (this.productForm.touched) {
      return confirm('Are you sure to navigate away, All changes will lost !')
    }
    return true
  }

  onAddProduct() {
    if(this.productForm.invalid) return;
    let formData = new FormData();
    for(let product in this.productForm.value) {
      formData.append(product, this.productForm.get(product).value)
    }

    this.productService.addNewProduct(formData).subscribe(res=> {
      if(res) {
        // console.log('ressssssssssssssssssss', res);
        this.productForm.reset();
        this.imagePreview = '';
      }
    })
  }

  onImagePicked(event: Event) {
    const target= event.target as HTMLInputElement;
    let file = (target.files as FileList)[0];
    this.productForm.get('imagePath')?.setValue(file)
    this.productForm.get('imagePath')?.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  

}
