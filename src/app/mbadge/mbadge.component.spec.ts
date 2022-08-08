import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbadgeComponent } from './mbadge.component';

describe('MbadgeComponent', () => {
  let component: MbadgeComponent;
  let fixture: ComponentFixture<MbadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MbadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
