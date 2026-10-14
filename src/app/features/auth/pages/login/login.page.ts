import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from '../../../../core/auth/session';

@Component({
  selector: 'app-login-page',
  standalone: true,
  template: `
    <h1>Entrar</h1>
    <p class="lede">Use o e-mail da conta do escritório.</p>
    <label for="email">E-mail</label>
    <input id="email" [value]="email" (input)="email = $any($event.target).value" />
    <label for="password">Senha</label>
    <input id="password" type="password" [value]="password" (input)="password = $any($event.target).value" />
    <button type="button" (click)="enter()">Entrar</button>
    @if (error) {
      <p class="error">{{ error }}</p>
    }
  `,
})
export class LoginPage {
  email = '';
  password = '';
  error = '';

  constructor(private readonly http: HttpClient, private readonly session: Session, private readonly router: Router) {}

  enter(): void {
    this.http.post<{ token: string; role: string }>(this.session.api + '/identity/login', { email: this.email, password: this.password }).subscribe({
      next: (body) => {
        this.session.token = body.token;
        this.session.role = body.role;
        this.router.navigateByUrl('/fila');
      },
      error: () => {
        this.error = 'E-mail ou senha não confere.';
      },
    });
  }
}
