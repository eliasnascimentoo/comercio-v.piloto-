import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListacmpPage } from './listacmp.page';

describe('ListacmpPage', () => {
  let component: ListacmpPage;
  let fixture: ComponentFixture<ListacmpPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListacmpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
