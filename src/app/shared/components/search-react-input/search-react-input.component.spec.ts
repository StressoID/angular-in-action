import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchReactInputComponent } from './search-react-input.component';

describe('SearchReactInputComponent', () => {
  let component: SearchReactInputComponent;
  let fixture: ComponentFixture<SearchReactInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchReactInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchReactInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
