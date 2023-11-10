import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './landingpage/header/demo.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FooterComponent } from './landingpage/footer/footer.component';
import { MainComponent } from './landingpage/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './landingpage/login/login.component';
import { SignupComponent } from './landingpage/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import{MatSnackBarModule} from '@angular/material/snack-bar';
import { RequestDemoComponent } from './landingpage/request-demo/request-demo.component';
import { CarrierpageComponent } from './landingpage/carrierpage/carrierpage.component';
import {MatMenuModule} from '@angular/material/menu';
import { ApplypageComponent } from './landingpage/applypage/applypage.component';
import { MoreInfopageComponent } from './landingpage/more-infopage/more-infopage.component';
import { FilterPipe } from './filter.pipe';
import { MatSelectModule } from '@angular/material/select';
import { HomeComponent } from './mainpage/home/home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FirstpageComponent } from './mainpage/sidenavfolders/firstpage.component';
import { SearchComponent } from './mainpage/sidenavfolders/search/search.component';
import { PeopleComponent } from './mainpage/sidenavfolders/search/people/people.component';
import { CompaniesComponent } from './mainpage/sidenavfolders/search/companies/companies.component';
import { SavedListComponent } from './mainpage/sidenavfolders/search/saved-list/saved-list.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { FiltersComponent } from './mainpage/sidenavfolders/search/filters/filters.component';
import { SavedSearchesComponent } from './mainpage/sidenavfolders/search/saved-searches/saved-searches.component';
import { SavedComponent } from './mainpage/sidenavfolders/search/people/saved/saved.component';
import { NetNewComponent } from './mainpage/sidenavfolders/search/people/net-new/net-new.component';
import { TotalComponent } from './mainpage/sidenavfolders/search/people/total/total.component';

import { RigthSidenetnewSavedTotalComponent } from './mainpage/sidenavfolders/search/people/rigth-sidenetnew-saved-total/rigth-sidenetnew-saved-total.component';

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
    FilterPipe,
    HomeComponent,
    FirstpageComponent,
    SearchComponent,
    PeopleComponent,
    CompaniesComponent,
    SavedListComponent,
    FiltersComponent,
    SavedSearchesComponent,
    SavedComponent,
    NetNewComponent,
    TotalComponent,
    RigthSidenetnewSavedTotalComponent
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
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
