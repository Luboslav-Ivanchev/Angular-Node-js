import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesertIdComponent } from './desert-id.component';

describe('DesertIdComponent', () => {
  let component: DesertIdComponent;
  let fixture: ComponentFixture<DesertIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesertIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesertIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
