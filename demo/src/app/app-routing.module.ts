import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './landingpage/login/login.component';
import { SignupComponent } from './landingpage/signup/signup.component';
import { AppComponent } from './app.component';
import { DemoComponent } from './landingpage/header/demo.component';
import { FooterComponent } from './landingpage/footer/footer.component';
import { MainComponent } from './landingpage/main/main.component';
import { RequestDemoComponent } from './landingpage/request-demo/request-demo.component';
import { CarrierpageComponent } from './landingpage/carrierpage/carrierpage.component';
import { MoreInfopageComponent } from './landingpage/more-infopage/more-infopage.component';
import { HomeComponent } from './mainpage/home/home.component';
import { FirstpageComponent } from './mainpage/sidenavfolders/firstpage.component';
import { SearchComponent } from './mainpage/sidenavfolders/search/search.component';
import { PeopleComponent } from './mainpage/sidenavfolders/search/people/people.component';
import { CompaniesComponent } from './mainpage/sidenavfolders/search/companies/companies.component';
import { SavedListComponent } from './mainpage/sidenavfolders/search/saved-list/saved-list.component';
import { filter } from 'rxjs';
import { FiltersComponent } from './mainpage/sidenavfolders/search/filters/filters.component';
import { SavedSearchesComponent } from './mainpage/sidenavfolders/search/saved-searches/saved-searches.component';

const routes: Routes = [{
  path:"" ,pathMatch:"full",redirectTo:'main'
},
{path:'requestDemo',component:RequestDemoComponent},
  {path:'login', component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'demo',component:DemoComponent},
  {path:'footer',component:FooterComponent},
  {path:'main',component:MainComponent},
  {path:'carrier',component:CarrierpageComponent},
  {path:'jobdetails/:id',component:MoreInfopageComponent},
  {path:'home',component:HomeComponent, children:[
    {path:'firstPage',component:FirstpageComponent},
    {path:'search',component:SearchComponent,children:[
      {path:'people',component:PeopleComponent,children:[
        {path:'filter',component:FiltersComponent},
      {path:'savedSearches',component:SavedSearchesComponent}]},
      {path:'companies',component:CompaniesComponent},
      {path:'savedList',component:SavedListComponent}
    ]}

  ]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
