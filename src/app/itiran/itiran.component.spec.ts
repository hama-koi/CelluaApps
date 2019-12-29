import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItiranComponent } from './itiran.component';

describe('ItiranComponent', () => {
  let component: ItiranComponent;
  let fixture: ComponentFixture<ItiranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItiranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItiranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
