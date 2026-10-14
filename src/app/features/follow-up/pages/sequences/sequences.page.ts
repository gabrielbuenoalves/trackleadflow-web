import { Component } from '@angular/core';
import { ConfigFormComponent } from '../../../../shared/smart/entity-form/config-form.component';

@Component({
  selector: 'app-sequences-page',
  standalone: true,
  imports: [ConfigFormComponent],
  template: `<app-config-form title="Follow-up" endpoint="/followup/sequences" textKey="body" textLabel="Mensagem da sequência" />`,
})
export class SequencesPage {}
