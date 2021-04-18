import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/config/services/config.service';

@Component({
  selector: 'amb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private readonly configService: ConfigService,
    private readonly router: Router
  ) {
    this.configService.configuration = {
      layout: {
        header: {
          hidden: true,
        },
        menu: {
          hidden: true,
        },
      },
    };
  }

  ngOnInit(): void {}

  login() {
    this.router.navigate(['/dashboard']);
  }
}
