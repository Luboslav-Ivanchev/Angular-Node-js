import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishIdComponent } from './dish-id.component';

describe('DishIdComponent', () => {
  let component: DishIdComponent;
  let fixture: ComponentFixture<DishIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DishIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
