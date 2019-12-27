import { TestBed, async } from '@angular/core/testing';
import { LoginComponent } from './login.component';
describe('LoginComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent
      ],
    }).compileComponents();
  }));


    it('validacion de autocompletado de input de correo',() => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = (<HTMLInputElement>document.getElementById('input1')).value='b.valleflores@gmail.com';
    expect(compiled).toBe("b.valleflores@gmail.com");
    });
    
    
    it('validacion de autocompletado de input de contraseña',() => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = (<HTMLInputElement>document.getElementById('input2')).value='berflores';
    expect(compiled).toBe("berflores");
    });

    it('comprobacion de contenido de etiquetas span',() => {
      const fixture = TestBed.createComponent(LoginComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('span').textContent).toContain('Recordar contraseña?');
      });
      
    
  
});
