import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Session } from '../../../../core/auth/session';

interface WorkItem {
  id: string;
  name: string;
  status: string;
}

@Component({
  selector: 'app-queue-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h1>Fila</h1>
    <p class="lede">Quem já pode falar com o especialista.</p>
    <ul class="queue">
      @for (item of items; track item.id) {
        <li>
          <a [routerLink]="['/leads', item.id]">
            <span class="who">{{ item.name }}</span>
            <span class="state" [class.is-queued]="item.status === 'Queued'">{{ statusLabel(item.status) }}</span>
          </a>
        </li>
      } @empty {
        <li class="lede">Ninguém na fila agora.</li>
      }
    </ul>
  `,
})
export class QueuePage implements OnInit {
  items: WorkItem[] = [];

  constructor(private readonly http: HttpClient, private readonly session: Session) {}

  statusLabel(status: string): string {
    if (status === 'Queued') {
      return 'Na fila';
    }
    if (status === 'Assigned') {
      return 'Com o especialista';
    }
    return status;
  }

  ngOnInit(): void {
    this.http.get<WorkItem[]>(this.session.api + '/attendance/work-items', {
      headers: new HttpHeaders({ Authorization: 'Bearer ' + this.session.token }),
    }).subscribe((items) => {
      this.items = items.filter((item) => item.status === 'Queued' || item.status === 'Assigned');
    });
  }
}
