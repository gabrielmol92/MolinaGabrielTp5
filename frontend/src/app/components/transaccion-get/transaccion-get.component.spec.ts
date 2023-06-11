import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionGetComponent } from './transaccion-get.component';

describe('TransaccionGetComponent', () => {
  let component: TransaccionGetComponent;
  let fixture: ComponentFixture<TransaccionGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransaccionGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaccionGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
