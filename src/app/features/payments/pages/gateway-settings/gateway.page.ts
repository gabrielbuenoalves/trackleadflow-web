import { Component } from '@angular/core';
import { ConfigFormComponent } from '../../../../shared/smart/entity-form/config-form.component';

@Component({
  selector: 'app-gateway-page',
  standalone: true,
  imports: [ConfigFormComponent],
  template: `<app-config-form title="Gateway" endpoint="/payments/gateway" [secret]="true" secretKey="secret" secretLabel="Credencial do gateway" />`,
})
export class GatewayPage {}
