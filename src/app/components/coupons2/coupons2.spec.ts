import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coupons2 } from './coupons2';

describe('Coupons2', () => {
  let component: Coupons2;
  let fixture: ComponentFixture<Coupons2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Coupons2],
    }).compileComponents();

    fixture = TestBed.createComponent(Coupons2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
