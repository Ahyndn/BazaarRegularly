import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carryall } from './carryall';

describe('Carryall', () => {
  let component: Carryall;
  let fixture: ComponentFixture<Carryall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carryall],
    }).compileComponents();

    fixture = TestBed.createComponent(Carryall);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
