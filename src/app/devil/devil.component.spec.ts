import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevilComponent } from './devil.component';

describe('DevilComponent', () => {
  let component: DevilComponent;
  let fixture: ComponentFixture<DevilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
