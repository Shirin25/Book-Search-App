import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableComponent } from '../table/table.component';
import { JavaScriptComponent } from './java-script.component';

describe('JavaScriptComponent', () => {
  let component: JavaScriptComponent;
  let fixture: ComponentFixture<JavaScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaScriptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavaScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
