import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersContactComponent } from './users-contact.component';

describe('UsersContactComponent', () => {
  let component: UsersContactComponent;
  let fixture: ComponentFixture<UsersContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersContactComponent]
    });
    fixture = TestBed.createComponent(UsersContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
