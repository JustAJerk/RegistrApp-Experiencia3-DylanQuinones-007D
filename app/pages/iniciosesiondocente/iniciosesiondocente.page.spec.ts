import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IniciosesiondocentePage } from './iniciosesiondocente.page';

describe('IniciosesiondocentePage', () => {
  let component: IniciosesiondocentePage;
  let fixture: ComponentFixture<IniciosesiondocentePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IniciosesiondocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
