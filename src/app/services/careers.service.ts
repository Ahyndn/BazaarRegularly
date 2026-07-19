import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CareersModel } from '../models/careers.model';

@Service()
export class CareersService {

  private http = inject(HttpClient);

  private url = 'http://localhost:3000/careers';

  getCareers(): Observable<CareersModel[]> {
    return this.http.get<CareersModel[]>(this.url);
  }

  getCareersById(id: number): Observable<CareersModel> {
    return this.http.get<CareersModel>(`${this.url}/${id}`);
  }
}