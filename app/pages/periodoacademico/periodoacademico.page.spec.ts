import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeriodoacademicoPage } from './periodoacademico.page';

describe('PeriodoacademicoPage', () => {
  let component: PeriodoacademicoPage;
  let fixture: ComponentFixture<PeriodoacademicoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PeriodoacademicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
