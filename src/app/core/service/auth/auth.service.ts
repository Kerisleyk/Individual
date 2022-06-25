import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginEmail(email: string | null | undefined, senha: string | null | undefined) {
    throw new Error('Method not implemented.');
  }
  signupEmail(email: string | null | undefined, senha: string | null | undefined, nome: string | null | undefined, nick: string | null | undefined) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
