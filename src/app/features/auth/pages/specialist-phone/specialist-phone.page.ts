import { Component } from '@angular/core';
import { ConfigFormComponent } from '../../../../shared/smart/entity-form/config-form.component';

@Component({
  selector: 'app-specialist-phone-page',
  standalone: true,
  imports: [ConfigFormComponent],
  template: `<app-config-form title="Telefone do especialista" endpoint="/identity/specialist-phone" textKey="phone" textLabel="Telefone" />`,
})
export class SpecialistPhonePage {}
