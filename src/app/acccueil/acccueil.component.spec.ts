import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcccueilComponent } from './acccueil.component';

describe('AcccueilComponent', () => {
  let component: AcccueilComponent;
  let fixture: ComponentFixture<AcccueilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcccueilComponent]
    });
    fixture = TestBed.createComponent(AcccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
