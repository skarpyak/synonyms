import { TestBed, async } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StoreModule } from "@ngrx/store";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { synonymsReducer } from "./reducers/synonyms";
import { AppComponent } from './app.component';
import { NgButtonComponent } from './ng-button/ng-button.component';
import { NgSearchInputComponent } from './ng-search-input/ng-search-input.component';
import { NgSynonymsService } from "./services/synonyms/ng-synonyms.service";

class MockService {
  findSynonyms(word) {
    return this;
  }
}

let mockService;

describe('AppComponent', () => {
  beforeEach(async(() => {
    mockService = new MockService();
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NgButtonComponent,
        NgSearchInputComponent,
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        StoreModule.provideStore({ synonyms: synonymsReducer })
      ],
      providers: [
        { provide: NgSynonymsService, useValue: mockService }
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'synonymss'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('synonymss');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('SYNONYMS');
  }));
});
