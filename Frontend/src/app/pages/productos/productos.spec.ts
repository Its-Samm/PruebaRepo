import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { Productos } from './productos';


describe('Productos', () => { 
  let component: Productos; 
  let fixture: ComponentFixture<Productos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productos], 
      providers: [provideHttpClient(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Productos); 
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});