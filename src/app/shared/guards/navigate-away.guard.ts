import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AddProductComponent } from 'src/app/components/products/add-product/add-product.component';


export interface IDeactivateGuard {
  canExit: ()=> Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
}

export class NavigateAwayGuard implements CanDeactivate<IDeactivateGuard> {
  
  constructor() {}

  canDeactivate(
    component: IDeactivateGuard,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    return component.canExit();
  }
  
}
