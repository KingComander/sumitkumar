import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreadmoreComponent } from './areadmore.component';

describe('AreadmoreComponent', () => {
  let component: AreadmoreComponent;
  let fixture: ComponentFixture<AreadmoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreadmoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AreadmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
