import { Component } from '@angular/core';
import { ConfigFormComponent } from '../../../../shared/smart/entity-form/config-form.component';

@Component({
  selector: 'app-templates-page',
  standalone: true,
  imports: [ConfigFormComponent],
  template: `<app-config-form title="Templates" endpoint="/whatsapp/templates" textKey="name" textLabel="Template aprovado" />`,
})
export class TemplatesPage {}
