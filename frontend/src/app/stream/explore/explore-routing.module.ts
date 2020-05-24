import { GeneresComponent } from './generes/generes.component';
import { GenereMusicComponent } from './genere-music/genere-music.component';
import { ExploreComponent } from './explore.component/explore.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ExploreComponent,
    children: [
      {
        path: '',
        component: GeneresComponent,
      },
      {
        path: ':genere',
        component: GenereMusicComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExploreRoutingModule {}
