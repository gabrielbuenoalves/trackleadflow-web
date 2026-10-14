import { Component } from '@angular/core';
import { ConfigFormComponent } from '../../../../shared/smart/entity-form/config-form.component';

@Component({
  selector: 'app-channel-page',
  standalone: true,
  imports: [ConfigFormComponent],
  template: `<app-config-form title="Canal" endpoint="/whatsapp/channel" [secret]="true" secretKey="token" secretLabel="Token da Cloud API" />`,
})
export class ChannelPage {}
