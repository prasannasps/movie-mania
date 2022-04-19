import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortedMoviesComponent } from './sorted-movies.component';

describe('SortedMoviesComponent', () => {
  let component: SortedMoviesComponent;
  let fixture: ComponentFixture<SortedMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortedMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortedMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
