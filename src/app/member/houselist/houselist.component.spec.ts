import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { houselistComponent } from './houselist.component';

describe('houselistComponent', () => {
  let component: houselistComponent;
  let fixture: ComponentFixture<houselistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ houselistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(houselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
