import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProdCardComponent } from './edit-prod-card.component';

describe('EditProdCardComponent', () => {
  let component: EditProdCardComponent;
  let fixture: ComponentFixture<EditProdCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditProdCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProdCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
