import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SocketUseCase } from 'src/app/dashboard/application/socket.usecase';
import { Entity } from 'src/app/dashboard/domain/entity';

@Component({
  selector: 'amb-vaccum',
  templateUrl: './vaccum.component.html',
  styleUrls: ['./vaccum.component.css'],
})
export class VaccumComponent implements OnInit {
  results: Entity[] = [];
  subscription: Subscription = new Subscription();
  view: any = [400, 300];
  scheme = {
    domain: ['#0d47a1', '#42a5f5', '#90caf9', '#adbdca'],
  };
  legend = true;
  legendPosition = 'above';
  legendTitle = 'Vacunas';
  gradient = true;
  doughnut = true;

  constructor(private readonly socketUseCase: SocketUseCase) {}

  ngOnInit(): void {
    this.subscription = this.socketUseCase
      .listen('dataupdate')
      .subscribe((results) => {
        this.results = results;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
