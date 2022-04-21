import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { APP_ROUTES } from 'app.routes';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatIconModule,
    RouterModule.forRoot(APP_ROUTES, { relativeLinkResolution: 'legacy' })
  ],
  exports: [SidebarComponent]
})
export class SidebarModule { }
