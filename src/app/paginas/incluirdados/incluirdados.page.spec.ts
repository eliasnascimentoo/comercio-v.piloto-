import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IncluirdadosPage } from './incluirdados.page';

describe('IncluirdadosPage', () => {
  let component: IncluirdadosPage;
  let fixture: ComponentFixture<IncluirdadosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IncluirdadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
