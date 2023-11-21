import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenudocentePage } from './menudocente.page';

describe('MenudocentePage', () => {
  let component: MenudocentePage;
  let fixture: ComponentFixture<MenudocentePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenudocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
