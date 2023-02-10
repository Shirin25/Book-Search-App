import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableComponent } from '../table/table.component';
import { PythonComponent } from './python.component';

describe('PythonComponent', () => {
  let component: PythonComponent;
  let fixture: ComponentFixture<PythonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PythonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PythonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
