import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembarComponent } from './membar.component';

describe('MembarComponent', () => {
  let component: MembarComponent;
  let fixture: ComponentFixture<MembarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
