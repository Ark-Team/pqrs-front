import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoSaveComponent } from './proceso-save.component';

describe('ProcesoSaveComponent', () => {
  let component: ProcesoSaveComponent;
  let fixture: ComponentFixture<ProcesoSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcesoSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesoSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
