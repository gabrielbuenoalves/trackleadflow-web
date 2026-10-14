import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ShellComponent } from './app/core/layout/shell.component';

bootstrapApplication(ShellComponent, appConfig).catch((error: unknown) => console.error(error));
