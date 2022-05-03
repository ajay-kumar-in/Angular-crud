import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

// not being used
// import in the component where need to be used and define canExit() { return confirm('are you sure to exit')}
// To use it imoprt in app module providers section
// in routing module define your canDeactivate guard array canDeactivate: [NavigateAwayGuard]

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
