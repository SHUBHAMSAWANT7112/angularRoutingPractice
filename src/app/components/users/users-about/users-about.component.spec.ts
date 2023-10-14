import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAboutComponent } from './users-about.component';

describe('UsersAboutComponent', () => {
  let component: UsersAboutComponent;
  let fixture: ComponentFixture<UsersAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersAboutComponent]
    });
    fixture = TestBed.createComponent(UsersAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
