import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Session } from '../../../../core/auth/session';

@Component({
  selector: 'app-lead-detail-page',
  standalone: true,
  template: `
    <h1>Lead</h1>
    <section>
      <h2>Triagem</h2>
      <p>{{ triage }}</p>
    </section>
    <section>
      <h2>Mensagens</h2>
      <p>{{ messages }}</p>
    </section>
    <section>
      <h2>Follow-up</h2>
      <p>{{ followUp }}</p>
    </section>
    <section>
      <h2>Cobranças</h2>
      <p>{{ charges }}</p>
    </section>
    <section>
      <h2>Entregas</h2>
      <p>{{ deliveries }}</p>
    </section>
  `,
})
export class LeadDetailPage implements OnInit {
  triage = '';
  messages = '';
  followUp = '';
  charges = '';
  deliveries = '';

  constructor(private readonly http: HttpClient, private readonly session: Session, private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const headers = new HttpHeaders({ Authorization: 'Bearer ' + this.session.token });
    this.http.get(this.session.api + '/qualification/leads/' + id, { headers }).subscribe((body) => { this.triage = JSON.stringify(body); });
    this.http.get(this.session.api + '/whatsapp/leads/' + id + '/messages', { headers }).subscribe((body) => { this.messages = JSON.stringify(body); });
    this.http.get(this.session.api + '/followup/leads/' + id, { headers }).subscribe((body) => { this.followUp = JSON.stringify(body); });
    this.http.get(this.session.api + '/payments/leads/' + id + '/charges', { headers }).subscribe((body) => { this.charges = JSON.stringify(body); });
    this.http.get(this.session.api + '/marketing/leads/' + id + '/deliveries', { headers }).subscribe((body) => { this.deliveries = JSON.stringify(body); });
  }
}
