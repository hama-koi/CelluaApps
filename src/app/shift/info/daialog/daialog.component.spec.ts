import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaialogComponent } from './daialog.component';

describe('DaialogComponent', () => {
  let component: DaialogComponent;
  let fixture: ComponentFixture<DaialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
