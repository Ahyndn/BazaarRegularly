import { inject, Service } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { MerchandiseModel } from '../models/merchandise.model';
import { MerchandiseModel2 } from '../models/merchandise.model2';


@Service()
export class MerchandiseService {

    private http = inject(HttpClient);

    private url = "https://dummyjson.com/products/category/womens-bags"; 
    
    getMerchandise(): Observable<MerchandiseModel[]> {
        return this.http
            .get<MerchandiseModel2>(this.url)
            .pipe(map(res => res.products));
    }

   getMerchandiseById(id: number): Observable<MerchandiseModel>{
        return this.http.get<MerchandiseModel>(
            `https://dummyjson.com/products/${id}`
        );
    }
}
