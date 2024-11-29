import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartilhaSalvosComponent } from './cartilha-salvos.component';

describe('CartilhaSalvosComponent', () => {
  let component: CartilhaSalvosComponent;
  let fixture: ComponentFixture<CartilhaSalvosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartilhaSalvosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartilhaSalvosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
