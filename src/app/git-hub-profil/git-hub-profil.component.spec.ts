import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubProfilComponent } from './git-hub-profil.component';

describe('GitHubProfilComponent', () => {
  let component: GitHubProfilComponent;
  let fixture: ComponentFixture<GitHubProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitHubProfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitHubProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
