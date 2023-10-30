import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Serie } from './serie';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  constructor(private http: HttpClient) {}

  private apiURL: string = environment.baseUrl;


  getSeries(): Observable<Serie[]> {
    return this.http.get<Serie[]>(this.apiURL);
  }

  getSeriesSeasonsAverage(series: Serie[]): number {
    let sum: number = 0;
    series.forEach((serie) => {
      sum += serie.seasons;
    });
    let avg = sum / series.length;
    return avg;
  }

  private messageSource = new BehaviorSubject<String> ("default message");
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: string ){
    this.messageSource.next(message);
  }
}
