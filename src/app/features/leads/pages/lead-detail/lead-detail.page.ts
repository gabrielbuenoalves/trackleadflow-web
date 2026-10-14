import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Session } from '../../../../core/auth/session';

@Component({
  selector: 'app-lead-detail-page',
  standalone: true,
  template: `
    <h1>Lead</h1>
    <p class="lede">O que a triagem, o WhatsApp e o pagamento já registraram.</p>
    <section class="record">
      <h2>Triagem</h2>
      <pre>{{ triage }}</pre>
    </section>
    <section class="record">
      <h2>Mensagens</h2>
      <pre>{{ messages }}</pre>
    </section>
    <section class="record">
      <h2>Follow-up</h2>
      <pre>{{ followUp }}</pre>
    </section>
    <section class="record">
      <h2>Cobranças</h2>
      <pre>{{ charges }}</pre>
    </section>
    <section class="record">
      <h2>Entregas</h2>
      <pre>{{ deliveries }}</pre>
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

  private show(body: unknown): string {
    return JSON.stringify(body, null, 2);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const headers = new HttpHeaders({ Authorization: 'Bearer ' + this.session.token });
    this.http.get(this.session.api + '/qualification/leads/' + id, { headers }).subscribe((body) => { this.triage = this.show(body); });
    this.http.get(this.session.api + '/whatsapp/leads/' + id + '/messages', { headers }).subscribe((body) => { this.messages = this.show(body); });
    this.http.get(this.session.api + '/followup/leads/' + id, { headers }).subscribe((body) => { this.followUp = this.show(body); });
    this.http.get(this.session.api + '/payments/leads/' + id + '/charges', { headers }).subscribe((body) => { this.charges = this.show(body); });
    this.http.get(this.session.api + '/marketing/leads/' + id + '/deliveries', { headers }).subscribe((body) => { this.deliveries = this.show(body); });
  }
}
