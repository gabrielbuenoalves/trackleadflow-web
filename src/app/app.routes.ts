import { Routes } from '@angular/router';
import { LoginPage } from './features/auth/pages/login/login.page';
import { CorpusPage } from './features/qualification/pages/criteria/corpus.page';
import { SpecialistPhonePage } from './features/auth/pages/specialist-phone/specialist-phone.page';
import { SequencesPage } from './features/follow-up/pages/sequences/sequences.page';
import { LabelsPage } from './features/payments/pages/charges/labels.page';
import { GatewayPage } from './features/payments/pages/gateway-settings/gateway.page';
import { ChannelPage } from './features/whatsapp/pages/channel/channel.page';
import { DatasetPage } from './features/marketing/pages/meta-connection/dataset.page';
import { TemplatesPage } from './features/whatsapp/pages/templates/templates.page';
import { QueuePage } from './features/attendance/pages/queue/queue.page';
import { LeadDetailPage } from './features/leads/pages/lead-detail/lead-detail.page';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginPage },
  { path: 'acervo', component: CorpusPage },
  { path: 'especialista', component: SpecialistPhonePage },
  { path: 'follow-up', component: SequencesPage },
  { path: 'rotulos', component: LabelsPage },
  { path: 'gateway', component: GatewayPage },
  { path: 'canal', component: ChannelPage },
  { path: 'dataset', component: DatasetPage },
  { path: 'templates', component: TemplatesPage },
  { path: 'fila', component: QueuePage },
  { path: 'leads/:id', component: LeadDetailPage },
];
