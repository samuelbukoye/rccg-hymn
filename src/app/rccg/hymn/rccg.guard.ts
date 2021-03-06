import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HymnService } from '../shared/hymn.service';

@Injectable({
  providedIn: 'root'
})
export class RccgGuard implements CanActivate {
  length:number
  constructor(
    private route:Router,
    private hymnService : HymnService
    ){
      this.length = this.hymnService.getLength()
    }
  ngOnInit(){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let id =+ next.url[1].path;
      if(id<1 || id>this.length){
        alert('invalid hymn no!!!');
        this.route.navigate(['hymns']);
        return false
      };
      return true;
  }
  
}
