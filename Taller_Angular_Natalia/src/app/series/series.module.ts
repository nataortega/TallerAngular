import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from './series.component';
import { SeriesCardsComponent } from './series-cards/series-cards.component';



@NgModule({
  declarations: [
    SeriesComponent,
    SeriesCardsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[SeriesComponent, SeriesCardsComponent]
})
export class SeriesModule { }
