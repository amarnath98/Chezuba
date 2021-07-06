import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChezubaComponent } from './chezuba.component';

describe('ChezubaComponent', () => {
  let component: ChezubaComponent;
  let fixture: ComponentFixture<ChezubaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChezubaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChezubaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
