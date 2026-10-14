import { Injectable } from '@angular/core';

const api = 'http://127.0.0.1:5080';

@Injectable({ providedIn: 'root' })
export class Session {
  token = '';
  role = '';

  get api(): string {
    return api;
  }

  get signedIn(): boolean {
    return this.token.length > 0;
  }
}
