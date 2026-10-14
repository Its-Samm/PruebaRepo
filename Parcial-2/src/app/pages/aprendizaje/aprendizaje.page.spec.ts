import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AprendizajePage } from './aprendizaje.page';

describe('AprendizajePage', () => {
  let component: AprendizajePage;
  let fixture: ComponentFixture<AprendizajePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AprendizajePage],
    }).compileComponents();

    fixture = TestBed.createComponent(AprendizajePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
