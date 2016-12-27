import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourListComponent } from './tour-list/tour-list.component';
import { TourService } from './tour.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild([
      { path: 'tour-list', component: TourListComponent }
    ])
  ],
  declarations: [TourListComponent],
  exports: [TourListComponent],
  providers: [TourService]
})
export class TourModule { }
