import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nav4 } from './nav4';

describe('Nav4', () => {
  let component: Nav4;
  let fixture: ComponentFixture<Nav4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nav4],
    }).compileComponents();

    fixture = TestBed.createComponent(Nav4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
