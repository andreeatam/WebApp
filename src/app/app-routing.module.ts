import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FirstComponent } from './first/first.component';
import { InfoComponent } from './info/info.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'review', component: ReviewComponent },
  { path: 'info', component: InfoComponent },
  { path: '', component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
