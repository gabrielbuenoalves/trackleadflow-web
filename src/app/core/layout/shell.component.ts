import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Session } from '../auth/session';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="shell">
      <header class="rail">
        <a class="mark" [routerLink]="session.signedIn ? '/fila' : '/login'">TrackLeadFlow</a>
        @if (!session.signedIn) {
          <a routerLink="/login" routerLinkActive="is-here">Entrar</a>
        } @else {
          <p class="rail-group">Operação</p>
          <a routerLink="/fila" routerLinkActive="is-here">Fila</a>
          <p class="rail-group">Ajustes</p>
          <a routerLink="/acervo" routerLinkActive="is-here">Acervo</a>
          <a routerLink="/especialista" routerLinkActive="is-here">Especialista</a>
          <a routerLink="/follow-up" routerLinkActive="is-here">Follow-up</a>
          <a routerLink="/rotulos" routerLinkActive="is-here">Rótulos</a>
          <a routerLink="/gateway" routerLinkActive="is-here">Gateway</a>
          <a routerLink="/canal" routerLinkActive="is-here">Canal</a>
          <a routerLink="/dataset" routerLinkActive="is-here">Dataset</a>
          <a routerLink="/templates" routerLinkActive="is-here">Templates</a>
        }
      </header>
      <main>
        <router-outlet />
      </main>
    </div>
  `,
})
export class ShellComponent {
  constructor(readonly session: Session) {}
}
