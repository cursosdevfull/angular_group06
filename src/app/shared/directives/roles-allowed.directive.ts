import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthUseCase } from 'src/app/core/application/auth.usecase';

@Directive({
  selector: '[roles-allowed]',
})
export class RolesAllowedDirective {
  @Input('roles-allowed') rolesAllowed: string[] = [];
  hasView = false;

  constructor(
    private readonly templateRef: TemplateRef<any>,
    private readonly viewContainerRef: ViewContainerRef,
    private readonly authUseCase: AuthUseCase
  ) {}

  ngOnInit() {
    this.execute();
  }

  execute() {
    const userIsLogged = this.authUseCase.getStatusUser();
    const rolesUser = this.authUseCase.getFieldInToken('roles');

    let userAllowed = false;
    for (const role of this.rolesAllowed) {
      if (rolesUser.indexOf(role) >= 0) {
        userAllowed = true;
        break;
      }
    }

    if (userIsLogged && userAllowed && !this.hasView) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else {
      this.viewContainerRef.clear();
      this.hasView = false;
    }
  }
}
function input() {
  throw new Error('Function not implemented.');
}
