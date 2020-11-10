import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentEventosComponent } from './component-eventos.component';

describe('ComponentEventosComponent', () => {
  let component: ComponentEventosComponent;
  let fixture: ComponentFixture<ComponentEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentEventosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
