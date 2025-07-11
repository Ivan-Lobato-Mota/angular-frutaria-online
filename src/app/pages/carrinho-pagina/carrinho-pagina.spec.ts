import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoPagina } from './carrinho-pagina';

describe('CarrinhoPagina', () => {
  let component: CarrinhoPagina;
  let fixture: ComponentFixture<CarrinhoPagina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrinhoPagina]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrinhoPagina);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
