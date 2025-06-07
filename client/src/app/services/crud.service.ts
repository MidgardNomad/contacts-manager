import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ServerResponse } from '../models/server-response.model';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private http: HttpClient) {}

  get<T>(endpoint: string) {
    return this.http.get<T>(`${environment}/${endpoint}`);
  }

  post<T, D>(endpoint: string, data: D) {
    return this.http.post<ServerResponse<T>>(
      `${environment}/${endpoint}`,
      data
    );
  }

  put<T, D>(endpoint: string, data: D) {
    return this.http.put<ServerResponse<T>>(`${environment}/${endpoint}`, data);
  }
}
