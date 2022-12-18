import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SushiIdComponent } from './sushi-id.component';

describe('SushiIdComponent', () => {
  let component: SushiIdComponent;
  let fixture: ComponentFixture<SushiIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SushiIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SushiIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
