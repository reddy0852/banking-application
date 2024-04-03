import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceEnqComponent } from './balance-enq.component';

describe('BalanceEnqComponent', () => {
  let component: BalanceEnqComponent;
  let fixture: ComponentFixture<BalanceEnqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceEnqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalanceEnqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
