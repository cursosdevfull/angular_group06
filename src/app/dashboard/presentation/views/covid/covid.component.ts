import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CovidUseCase } from 'src/app/dashboard/application/covid.usecase';
import { Covid } from 'src/app/dashboard/domain/covid';

interface ICovid {
  name: string;
  value: number;
}

@Component({
  selector: 'amb-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css'],
})
export class CovidComponent implements OnInit {
  dataCovid: ICovid[] = [];
  suscription: Subscription = new Subscription();

  view: any = [700, 450];
  scheme = {
    domain: ['#0d47a1', '#42a5f5', '#90caf9', '#adbdca'],
  };
  xAxis = true;
  yAxis = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Países';
  yAxisLabel = 'Cantidad de contagiados';
  yScaleMin = 0;
  yScaleMax = 2500;
  showGridLines = true;
  legend = true;
  legendPosition = 'right';
  legendTitle = '';

  constructor(private readonly covidUseCase: CovidUseCase) {}

  ngOnInit(): void {
    this.suscription = this.covidUseCase.getAll().subscribe((data: Covid[]) => {
      this.dataCovid = data.map((el: Covid) => ({
        name: el.countryRegion,
        value: el.confirmed,
      }));

      console.table(this.dataCovid);
    });
  }

  ngOnDestroy() {
    this.suscription.unsubscribe();
  }
}
