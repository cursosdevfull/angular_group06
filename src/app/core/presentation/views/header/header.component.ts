import { Component, OnInit } from '@angular/core';
import { AuthUseCase } from 'src/app/core/application/auth.usecase';

@Component({
  selector: 'amb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  nameUser: string = '';

  constructor(private readonly authUseCase: AuthUseCase) {}

  ngOnInit(): void {
    this.nameUser = this.authUseCase.getFieldInToken('name');
  }

  logout() {
    this.authUseCase.logout();
  }
}
