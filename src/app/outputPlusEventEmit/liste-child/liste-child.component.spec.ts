import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeChildComponent } from './liste-child.component';

describe('ListeChildComponent', () => {
  let component: ListeChildComponent;
  let fixture: ComponentFixture<ListeChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
