import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carryall2 } from './carryall2';

describe('Carryall2', () => {
  let component: Carryall2;
  let fixture: ComponentFixture<Carryall2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carryall2],
    }).compileComponents();

    fixture = TestBed.createComponent(Carryall2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
