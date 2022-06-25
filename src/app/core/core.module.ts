import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { LoaderComponent } from './loader/loader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { AuthModule } from '../auth/auth.module';
import { MatIcon, MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    NavbarComponent,
    LoaderComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MaterialModule,
    AuthRoutingModule,
    AuthModule,
    MatIconModule
  ],
  exports: [
    NavbarComponent,
    LoaderComponent
  ],
})
export class CoreModule { }
