import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', (): void => {
  beforeEach(async (): Promise<any> => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', (): void => {
    const fixture: any = TestBed.createComponent(AppComponent);
    const app: any = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
