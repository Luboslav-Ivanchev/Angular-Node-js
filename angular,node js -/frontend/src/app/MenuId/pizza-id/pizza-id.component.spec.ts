import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaIdComponent } from './pizza-id.component';

describe('PizzaIdComponent', () => {
  let component: PizzaIdComponent;
  let fixture: ComponentFixture<PizzaIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
