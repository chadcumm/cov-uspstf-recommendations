import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecTableComponent } from './rec-table.component';

describe('RecTableComponent', () => {
  let component: RecTableComponent;
  let fixture: ComponentFixture<RecTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecTableComponent]
    });
    fixture = TestBed.createComponent(RecTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
