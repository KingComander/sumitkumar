import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SreadmoreComponent } from './sreadmore.component';

describe('SreadmoreComponent', () => {
  let component: SreadmoreComponent;
  let fixture: ComponentFixture<SreadmoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SreadmoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SreadmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
