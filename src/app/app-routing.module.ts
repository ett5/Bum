import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeManagerComponent } from './Components/home-manager/home-manager.component';
import { HomeNeighborComponent } from './Components/home-neighbor/home-neighbor.component';
import { HomeComponent } from './Components/home/home.component';
import {LoginComponent} from './Components/login/login.component';
const routes: Routes = [
  {path: '',
  component:HomeComponent},
  {path: 'login',
 component:LoginComponent},

 {path:'admin',component:HomeManagerComponent},{path:'builder',component:HomeNeighborComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
