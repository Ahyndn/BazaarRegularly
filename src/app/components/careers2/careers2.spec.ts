import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Careers2 } from './careers2';

describe('Careers2', () => {
  let component: Careers2;
  let fixture: ComponentFixture<Careers2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Careers2],
    }).compileComponents();

    fixture = TestBed.createComponent(Careers2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
