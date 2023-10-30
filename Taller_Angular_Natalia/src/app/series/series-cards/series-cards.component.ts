import { Component, OnInit , Input} from '@angular/core';
import { SeriesComponent } from '../series.component';
import { SeriesService } from '../series.service';
import { Serie } from '../serie';

@Component({
  selector: 'app-series-cards',
  templateUrl: './series-cards.component.html',
  styleUrls: ['./series-cards.component.css']
})
export class SeriesCardsComponent implements OnInit{
  message?:String;

  public serie?:Serie;

  constructor(private service:SeriesService){
  }

  series: Serie[] = [];
  getSeries():void{
    this.service.getSeries().subscribe((series)=>{
      this.series = series;
      this.serie = series[0]
      
    })
  }

  updateCards(id:number):void{
    this.serie = this.series[id];
  }

  ngOnInit(): void {
      this.getSeries();
      this.service.currentMessage.subscribe((message)=> {
        this.message = message;
        this.updateCards((this.message as unknown as number) - 1);
      })
  }

}
