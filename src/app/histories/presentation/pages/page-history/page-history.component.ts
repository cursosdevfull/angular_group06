import { Component, OnInit } from '@angular/core';
import { ConfigLayout } from 'src/app/config/interfaces/config.interface';
import { ConfigService } from 'src/app/config/services/config.service';

@Component({
  selector: 'amb-page-history',
  templateUrl: './page-history.component.html',
  styleUrls: ['./page-history.component.css'],
})
export class PageHistoryComponent implements OnInit {
  constructor(private readonly configService: ConfigService) {
    const config: ConfigLayout = {
      layout: {
        header: {
          hidden: false,
        },
        menu: {
          hidden: false,
        },
      },
    };
    this.configService.configuration = config;
  }

  ngOnInit(): void {}
}
