import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BazaarRegularly } from './bazaar-regularly';

describe('BazaarRegularly', () => {
  let component: BazaarRegularly;
  let fixture: ComponentFixture<BazaarRegularly>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BazaarRegularly],
    }).compileComponents();

    fixture = TestBed.createComponent(BazaarRegularly);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
