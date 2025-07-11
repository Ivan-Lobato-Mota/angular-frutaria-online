import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaProduto } from './caixa-produto';

describe('CaixaProduto', () => {
  let component: CaixaProduto;
  let fixture: ComponentFixture<CaixaProduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaixaProduto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaixaProduto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
