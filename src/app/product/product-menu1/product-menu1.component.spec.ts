import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMenu1Component } from './product-menu1.component';

describe('ProductMenu1Component', () => {
  let component: ProductMenu1Component;
  let fixture: ComponentFixture<ProductMenu1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductMenu1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductMenu1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
