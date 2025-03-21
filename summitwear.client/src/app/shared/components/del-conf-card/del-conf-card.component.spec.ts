import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelConfCardComponent } from './del-conf-card.component';

describe('DelConfCardComponent', () => {
  let component: DelConfCardComponent;
  let fixture: ComponentFixture<DelConfCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DelConfCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelConfCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
