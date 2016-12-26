import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'tour-list', pathMatch: 'full'},
  { path: 'tour-list', loadChildren: 'app/tour/tour.module#TourModule' },
  { path: 'ticket-list', loadChildren: 'app/ticket/ticket.module#TicketModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
