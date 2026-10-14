import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Session } from '../../../core/auth/session';
import { SecretFieldComponent } from '../../ui/secret-field/secret-field.component';

@Component({
  selector: 'app-config-form',
  standalone: true,
  imports: [SecretFieldComponent],
  template: `
    <h1>{{ title }}</h1>
    @if (textLabel) {
      <label [attr.for]="textKey">{{ textLabel }}</label>
      <textarea [id]="textKey" rows="4" [value]="text" (input)="text = $any($event.target).value"></textarea>
    }
    @if (secret) {
      <app-secret-field [label]="secretLabel" [clearToken]="clearToken" (valueChange)="secretValue = $event" />
      @if (configured) {
        <p class="configured">Credencial configurada.</p>
      }
    }
    <button type="button" (click)="save()">Salvar</button>
  `,
})
export class ConfigFormComponent implements OnInit {
  @Input() title = '';
  @Input() endpoint = '';
  @Input() textKey = 'value';
  @Input() textLabel = '';
  @Input() secret = false;
  @Input() secretKey = 'secret';
  @Input() secretLabel = 'Credencial';

  text = '';
  secretValue = '';
  configured = false;
  clearToken = 0;

  constructor(private readonly http: HttpClient, private readonly session: Session) {}

  ngOnInit(): void {
    this.http.get<Record<string, string>>(this.session.api + this.endpoint, { headers: this.headers() }).subscribe((body) => {
      this.text = body[this.textKey] ?? '';
      this.configured = body[this.secretKey + 'Configured'] === 'true';
      this.secretValue = '';
    });
  }

  save(): void {
    const body: Record<string, string> = {};
    if (this.textLabel) {
      body[this.textKey] = this.text;
    }
    if (this.secret && this.secretValue) {
      body[this.secretKey] = this.secretValue;
    }
    this.http.put(this.session.api + this.endpoint, body, { headers: this.headers() }).subscribe(() => {
      this.secretValue = '';
      this.clearToken += 1;
      this.ngOnInit();
    });
  }

  private headers(): HttpHeaders {
    return new HttpHeaders({ Authorization: 'Bearer ' + this.session.token });
  }
}
