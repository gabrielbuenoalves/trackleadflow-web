import { Component } from '@angular/core';
import { ConfigFormComponent } from '../../../../shared/smart/entity-form/config-form.component';

@Component({
  selector: 'app-labels-page',
  standalone: true,
  imports: [ConfigFormComponent],
  template: `<app-config-form title="Rótulos de cobrança" endpoint="/payments/labels" textKey="labels" textLabel="Rótulos" />`,
})
export class LabelsPage {}
