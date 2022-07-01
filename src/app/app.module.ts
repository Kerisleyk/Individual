import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { AuthModule } from './auth/auth.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { CoreModule } from './core/core.module';
import { HotToastModule } from '@ngneat/hot-toast';
import { CursosModule } from './cursos/cursos.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    AuthModule,
    AuthRoutingModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule,
    CoreModule,
    HotToastModule.forRoot(),
    CursosModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
