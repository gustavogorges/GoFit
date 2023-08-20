import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoRoupaComponent } from './produto-roupa.component';

describe('ProdutoRoupaComponent', () => {
  let component: ProdutoRoupaComponent;
  let fixture: ComponentFixture<ProdutoRoupaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoRoupaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoRoupaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
