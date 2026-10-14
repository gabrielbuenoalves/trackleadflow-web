import { Component } from '@angular/core';
import { ConfigFormComponent } from '../../../../shared/smart/entity-form/config-form.component';

@Component({
  selector: 'app-dataset-page',
  standalone: true,
  imports: [ConfigFormComponent],
  template: `<app-config-form title="Dataset" endpoint="/marketing/dataset" textKey="datasetId" textLabel="Dataset" [secret]="true" secretKey="token" secretLabel="Token do sistema" />`,
})
export class DatasetPage {}
