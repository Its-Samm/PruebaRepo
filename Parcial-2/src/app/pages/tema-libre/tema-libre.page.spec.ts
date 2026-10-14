import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemaLibrePage } from './tema-libre.page';

describe('TemaLibrePage', () => {
  let component: TemaLibrePage;
  let fixture: ComponentFixture<TemaLibrePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemaLibrePage],
    }).compileComponents();

    fixture = TestBed.createComponent(TemaLibrePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
