import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaladIdComponent } from './salad-id.component';

describe('SaladIdComponent', () => {
  let component: SaladIdComponent;
  let fixture: ComponentFixture<SaladIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaladIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaladIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
