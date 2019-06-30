import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFormDataComponent } from './show-form-data.component';

describe('ShowFormDataComponent', () => {
  let component: ShowFormDataComponent;
  let fixture: ComponentFixture<ShowFormDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowFormDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFormDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
