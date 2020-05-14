import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router'
import {HomeComponent } from '../pages/home/home.component';
import {ContactComponent} from '../pages/contact/contact.component';
import { BodyComponent } from '../components/body/body.component';
import { AboutComponent } from '../pages/about/about.component';

const routes: Routes = [
{path:'',component:BodyComponent},
{path:'Home', component:HomeComponent},
{path:'Contact us', component:ContactComponent},
{path: 'About us', component:AboutComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,ContactComponent]
