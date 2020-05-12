import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaSaveComponent } from './area-save.component';

describe('AreaSaveComponent', () => {
  let component: AreaSaveComponent;
  let fixture: ComponentFixture<AreaSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
