import { Component } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { ConfigLayout } from './config/interfaces/config.interface';
import { ConfigService } from './config/services/config.service';

@Component({
  selector: 'amb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ambulance';
  listUsers = ['User1', 'User2', 'User3'];
  fecha = new Date();
  expanded = true;

  config: Partial<ConfigLayout> = {};

  constructor(
    private readonly configService: ConfigService,
    private readonly router: Router,
    private readonly activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.configService.configuration.subscribe((config: ConfigLayout) => {
      this.config = config;
    });
  }

  showExpand(expanded: boolean) {
    this.expanded = expanded;
  }
}
