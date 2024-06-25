import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentplayingComponent } from './currentplaying.component';

describe('CurrentplayingComponent', () => {
  let component: CurrentplayingComponent;
  let fixture: ComponentFixture<CurrentplayingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentplayingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrentplayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
