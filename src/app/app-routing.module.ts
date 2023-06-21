import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './component/about-me/about-me.component';
import { ProjectComponent } from './component/project/project.component';
import { ServicesComponent } from './component/services/services.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { LayoutComponent } from './Layout/layout/layout.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"layout",component:LayoutComponent},
  {path:"about-me",component:AboutMeComponent},
  {path:"project",component:ProjectComponent},
  {path:"Services",component:ServicesComponent},
  {path:"contact-us",component:ContactUsComponent},
  {path:"home",component:HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
