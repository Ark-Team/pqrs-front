import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesorLayoutComponent } from './asesor-layout.component';

describe('AsesorLayoutComponent', () => {
  let component: AsesorLayoutComponent;
  let fixture: ComponentFixture<AsesorLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsesorLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsesorLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
