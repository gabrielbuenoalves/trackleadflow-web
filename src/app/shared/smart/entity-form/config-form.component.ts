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
      <textarea [id]="textKey" rows="4" [value]="text" (input)="editText($any($event.target).value)"></textarea>
    }
    @if (secret) {
      <app-secret-field [label]="secretLabel" [clearToken]="clearToken" (valueChange)="editSecret($event)" />
      @if (configured) {
        <p class="configured">Credencial configurada.</p>
      }
    }
    <button type="button" (click)="save()">Salvar</button>
    @if (saved) {
      <p class="saved">Salvo.</p>
    }
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
  saved = false;

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
      this.saved = true;
      this.ngOnInit();
    });
  }

  editText(value: string): void {
    this.text = value;
    this.saved = false;
  }

  editSecret(value: string): void {
    this.secretValue = value;
    this.saved = false;
  }

  private headers(): HttpHeaders {
    return new HttpHeaders({ Authorization: 'Bearer ' + this.session.token });
  }
}
