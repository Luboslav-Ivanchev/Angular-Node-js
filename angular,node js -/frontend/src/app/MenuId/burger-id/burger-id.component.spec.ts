import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerIdComponent } from './burger-id.component';

describe('BurgerIdComponent', () => {
  let component: BurgerIdComponent;
  let fixture: ComponentFixture<BurgerIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurgerIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
