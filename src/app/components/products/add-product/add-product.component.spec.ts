import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { AddProductComponent } from './add-product.component';

describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule
      ],
      declarations: [AddProductComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('AddProduct form should be invalid', fakeAsync(() => {
    component.productForm.controls['name'].setValue('');
    component.productForm.controls['description'].setValue('');
    component.productForm.controls['originalPrice'].setValue('');
    component.productForm.controls['discount'].setValue('');
    component.productForm.controls['category'].setValue('');
    component.productForm.controls['imagePath'].setValue('');
    component.productForm.controls['status'].setValue('');
    expect(component.productForm.valid).toBeFalsy();
  }));

  it('AddProduct form should be valid', fakeAsync(() => {
    component.productForm.controls['name'].setValue('name');
    component.productForm.controls['description'].setValue('description');
    component.productForm.controls['originalPrice'].setValue('originalPrice');
    component.productForm.controls['discount'].setValue('discount');
    component.productForm.controls['category'].setValue('category');
    component.productForm.controls['imagePath'].setValue('imagePath');
    component.productForm.controls['status'].setValue('status');
    expect(component.productForm.valid).toBeTruthy();
  }));

  it('Should pick image once on click', fakeAsync(() => {
    spyOn(component, 'onImagePicked');
    let btn = fixture.debugElement.query(By.css('#imagePath'));
    btn.triggerEventHandler('change', null);
    expect(component.onImagePicked).toHaveBeenCalledTimes(1);
  }))

  it('Should call addProduct method on click', fakeAsync(() => {
    spyOn(component, 'onAddProduct');
    let btn = fixture.debugElement.query(By.css('.add_product'));
    btn.triggerEventHandler('click', null);
    expect(component.onAddProduct).toHaveBeenCalledTimes(1);
  }))


});
