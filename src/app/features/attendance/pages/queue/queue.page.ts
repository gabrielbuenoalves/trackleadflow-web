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
    @for (item of items; track item.id) {
      <p><a [routerLink]="['/leads', item.id]">{{ item.name }}</a> — {{ item.status }}</p>
    }
  `,
})
export class QueuePage implements OnInit {
  items: WorkItem[] = [];

  constructor(private readonly http: HttpClient, private readonly session: Session) {}

  ngOnInit(): void {
    this.http.get<WorkItem[]>(this.session.api + '/attendance/work-items', {
      headers: new HttpHeaders({ Authorization: 'Bearer ' + this.session.token }),
    }).subscribe((items) => {
      this.items = items.filter((item) => item.status === 'Queued' || item.status === 'Assigned');
    });
  }
}
