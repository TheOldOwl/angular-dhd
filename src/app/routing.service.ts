
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs' ;

@Injectable()
export class DhdRouteService {

    private routeId = new BehaviorSubject<number>(0);
    private page = new BehaviorSubject<string>('');

    currentRouteId = this.routeId.asObservable();
    currentRoutePage = this.page.asObservable();

    getSelectedRoute(obj:any){
        this.routeId.next(obj.id);
        this.page.next(obj.page)
    }

     

}