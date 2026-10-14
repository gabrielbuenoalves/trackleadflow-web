import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-secret-field',
  standalone: true,
  template: `
    <label [attr.for]="name">{{ label }}</label>
    <input [id]="name" type="password" autocomplete="off" [value]="value" (input)="change($event)" />
  `,
})
export class SecretFieldComponent {
  @Input() label = 'Segredo';
  @Input() name = 'secret';
  @Input() set clearToken(token: number) {
    this.value = '';
    void token;
  }
  @Output() valueChange = new EventEmitter<string>();
  value = '';

  change(event: Event): void {
    this.value = (event.target as HTMLInputElement).value;
    this.valueChange.emit(this.value);
  }
}
