import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { EMPTY, of } from 'rxjs';
import { ProductService } from '../services/product.service';

import { ListProductComponent } from './list-product.component';

describe('ListProductComponent', () => {
  let component: ListProductComponent;
  let fixture: ComponentFixture<ListProductComponent>;
  let products: any;

  beforeEach(async () => {
    products = { products: [1, 2, 3] }
    // const productService = jasmine.createSpyObj('ProductService', ['getAllProducts']);
    // productService.getAllProducts.and.returnValue(of(products));

    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        ToastrModule.forRoot()
      ],
      declarations: [ListProductComponent],
      // providers: [{ provide: ProductService, useValue: productService }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('get list of products from spy server', () => {
  //   fixture.detectChanges();
  //   expect(component.products).toEqual(products.products);
  // })

  // xit('Render list of products from spy server', ()=> {
  //   let x = fixture.nativeElement.querySelectorAll('product_Row').nativeElement;
  //   fixture.detectChanges()
  //   console.log('xxxxxxxxxxxxxx', x);
  //   expect(x.length).toBeGreaterThan(0);
  // })

  // xit('Should call delete method', ()=> {
  //   const productService = jasmine.createSpyObj('ProductService', ['deleteProduct']);
  //   // productService.deleteProduct(1);
  //   spyOn(window, 'confirm').and.returnValue(true);
  //   component.onDeleteProduct(1);
  //   // let spy = spyOn(productService, 'deleteProduct').and.returnValue(EMPTY)
  //   expect(productService).toHaveBeenCalledWith(1);
  // })

  // it('Should call the delete product method once on click', fakeAsync(() => {
  //   spyOn(component, 'onDeleteProduct');
  //   let btn = fixture.debugElement.query(By.css('.deleteBtn'));
  //   btn.triggerEventHandler('click', null);
  //   expect(component.onDeleteProduct).toHaveBeenCalledTimes(1);
  // }))

});
