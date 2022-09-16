import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMenu3Component } from './product-menu3.component';

describe('ProductMenu3Component', () => {
  let component: ProductMenu3Component;
  let fixture: ComponentFixture<ProductMenu3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductMenu3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductMenu3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
