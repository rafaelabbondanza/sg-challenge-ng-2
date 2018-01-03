import { TestBed, inject } from '@angular/core/testing';

import { ArticleTrackerService } from './article-tracker.service';

// TODO: Implement tests

describe('ArticleTrackerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleTrackerService]
    });
  });

  it('should be created', inject([ArticleTrackerService], (service: ArticleTrackerService) => {
    expect(service).toBeTruthy();
  }));
});
