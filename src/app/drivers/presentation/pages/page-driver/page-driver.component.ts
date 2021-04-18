import { Component, OnInit } from '@angular/core';
import { ConfigLayout } from 'src/app/config/interfaces/config.interface';
import { ConfigService } from 'src/app/config/services/config.service';

@Component({
  selector: 'amb-page-driver',
  templateUrl: './page-driver.component.html',
  styleUrls: ['./page-driver.component.css'],
})
export class PageDriverComponent implements OnInit {
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
