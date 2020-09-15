import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BirdDetailComponent } from './shared/components/bird-detail/bird-detail.component';
import { BirdsComponent } from './shared/components/birds/birds.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { FishesComponent } from './shared/components/fishes/fishes.component';
import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'birds',
    component: BirdsComponent,
    children: [{ path: ':slug', component: BirdDetailComponent }],
  },
  { path: 'poissons', component: FishesComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
