import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { RequestDemoComponent } from './request-demo/request-demo.component';
import { CarrierpageComponent } from './carrierpage/carrierpage.component';

const routes: Routes = [{
  path:"" ,pathMatch:"full",redirectTo:'main'
},
{path:'requestDemo',component:RequestDemoComponent},
  {path:'login', component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'demo',component:DemoComponent},
  {path:'footer',component:FooterComponent},
  {path:'main',component:MainComponent},
  {path:'carrier',component:CarrierpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
