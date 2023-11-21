import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrgeneradoPage } from './qrgenerado.page';

describe('QrgeneradoPage', () => {
  let component: QrgeneradoPage;
  let fixture: ComponentFixture<QrgeneradoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QrgeneradoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
