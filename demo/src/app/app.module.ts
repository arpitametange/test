import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import{MatSnackBarModule} from '@angular/material/snack-bar';
import { RequestDemoComponent } from './request-demo/request-demo.component';
import { CarrierpageComponent } from './carrierpage/carrierpage.component';
import {MatMenuModule} from '@angular/material/menu';
import { ApplypageComponent } from './applypage/applypage.component';
import { MoreInfopageComponent } from './more-infopage/more-infopage.component';
import { FilterPipe } from './filter.pipe';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    FooterComponent,
    MainComponent,
    LoginComponent,
    SignupComponent,
    RequestDemoComponent,
    CarrierpageComponent,
    ApplypageComponent,
    MoreInfopageComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatIconModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    MatFormFieldModule,
    HttpClientModule,
    MatDialogModule,
    MatMenuModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
