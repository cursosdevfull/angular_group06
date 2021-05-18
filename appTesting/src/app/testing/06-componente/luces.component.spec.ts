import { LucesComponent } from './luces.component';

describe('luces.component', () => {
  let lucesComponent;

  beforeEach(() => {
    lucesComponent = new LucesComponent();
  });

  it('Luz apagada al inicio', () => {
    const message = lucesComponent.message;

    expect(message).toBe('La luz está apagada');
  });

  it('Encendiendo y apagando la luz', () => {
    lucesComponent.action();
    let message = lucesComponent.message;

    expect(message).toBe('La luz está encendida');

    lucesComponent.action();
    message = lucesComponent.message;

    expect(message).toBe('La luz está apagada');
  });
});
