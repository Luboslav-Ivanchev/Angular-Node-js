import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastaIdComponent } from './pasta-id.component';

describe('PastaIdComponent', () => {
  let component: PastaIdComponent;
  let fixture: ComponentFixture<PastaIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastaIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastaIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
