import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostByUser } from './post-by-user';

describe('PostByUser', () => {
  let component: PostByUser;
  let fixture: ComponentFixture<PostByUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostByUser],
    }).compileComponents();

    fixture = TestBed.createComponent(PostByUser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
