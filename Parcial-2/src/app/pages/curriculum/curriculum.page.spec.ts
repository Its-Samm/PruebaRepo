import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurriculumPage } from './curriculum.page';

describe('CurriculumPage', () => {
  let component: CurriculumPage;
  let fixture: ComponentFixture<CurriculumPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurriculumPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CurriculumPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
