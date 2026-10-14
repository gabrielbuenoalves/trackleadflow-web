import { Component } from '@angular/core';
import { ConfigFormComponent } from '../../../../shared/smart/entity-form/config-form.component';

@Component({
  selector: 'app-corpus-page',
  standalone: true,
  imports: [ConfigFormComponent],
  template: `<app-config-form title="Acervo" endpoint="/qualification/corpus" textKey="script" textLabel="Texto do cliente" />`,
})
export class CorpusPage {}
