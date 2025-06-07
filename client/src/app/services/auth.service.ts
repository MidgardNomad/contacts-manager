import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private crud: CrudService) {}

  private readonly endpoint = 'auth/login';

  login(data: User) {
    return this.crud.post<{ token: string }, User>(this.endpoint, { ...data });
  }
}
