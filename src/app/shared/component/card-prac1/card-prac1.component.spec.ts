import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPrac1Component } from './card-prac1.component';

describe('CardPrac1Component', () => {
  let component: CardPrac1Component;
  let fixture: ComponentFixture<CardPrac1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPrac1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPrac1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
