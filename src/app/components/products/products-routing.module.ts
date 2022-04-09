import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigateAwayGuard } from 'src/app/shared/guards/navigate-away.guard';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ListProductComponent } from './list-product/list-product.component';

export const routes: Routes = [
  {
    path: 'add',
    component: AddProductComponent,
    canDeactivate: [NavigateAwayGuard]

  },
  {
    path: 'edit',
    component: EditProductComponent
  },
  {
    path: 'list',
    component: ListProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
