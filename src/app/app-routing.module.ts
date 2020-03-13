import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
    },
    {
      path: 'heroes',
      component: HeroesComponent
      },
    {
    path: 'about',
    loadChildren: './about/about.module#AboutModule'
    },
    {
      path: 'car',
      loadChildren: './car/car.module#CarModule'
     } ,
    // app-routing
  {
    path: 'contacts',
    loadChildren: './contacts/contacts.module#ContactsModule'
    },
    {
      path: 'converter',
      loadChildren: './converter/converter.module#ConverterModule'
      },
      {
        path: 'rates',
        loadChildren: './6-http/rates/rates.module#RatesModule'
       },
       {
        path: 'notifications',
        loadChildren: './notifications/notifications.module#NotificationsModule'
        },
        {
          path: 'security',
          loadChildren: './security/security.module#SecurityModule'
          },
    {
    path: 'not-found',
    component: NotFoundComponent
    },
    {
    path: '**',
    redirectTo: 'not-found'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
