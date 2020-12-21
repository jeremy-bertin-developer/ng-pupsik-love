import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhrasesService {
  constructor() {}

  getPhrases(model: any): Observable<any> {
    return new Observable((observer) => {
      observer.next(model);
      observer.complete();
    });
  }
}
