import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoAcessorioComponent } from './produto-acessorio.component';

describe('ProdutoAcessorioComponent', () => {
  let component: ProdutoAcessorioComponent;
  let fixture: ComponentFixture<ProdutoAcessorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoAcessorioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoAcessorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
