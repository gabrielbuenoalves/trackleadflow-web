import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Session } from '../auth/session';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav>
      <a routerLink="/login">Entrar</a>
      @if (session.signedIn) {
        <a routerLink="/acervo">Acervo</a>
        <a routerLink="/especialista">Especialista</a>
        <a routerLink="/follow-up">Follow-up</a>
        <a routerLink="/rotulos">Rótulos</a>
        <a routerLink="/gateway">Gateway</a>
        <a routerLink="/canal">Canal</a>
        <a routerLink="/dataset">Dataset</a>
        <a routerLink="/templates">Templates</a>
        <a routerLink="/fila">Fila</a>
      }
    </nav>
    <main>
      <router-outlet />
    </main>
  `,
})
export class ShellComponent {
  constructor(readonly session: Session) {}
}
