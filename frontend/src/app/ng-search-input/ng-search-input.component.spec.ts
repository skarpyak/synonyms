import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from "@ngrx/store";
import { synonymsReducer } from "../reducers/synonyms";
import { NgSearchInputComponent } from './ng-search-input.component';
import { NgSynonymsService } from "../services/synonyms/ng-synonyms.service";


class MockService {
  findSynonyms(word) {
    return this;
  }
}

describe('NgSearchInputComponent', () => {
  let component: NgSearchInputComponent;
  let fixture: ComponentFixture<NgSearchInputComponent>;
  let mockService;

  beforeEach(async(() => {
    mockService = new MockService();
    TestBed.configureTestingModule({
      declarations: [
        NgSearchInputComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        StoreModule.provideStore({ synonyms: synonymsReducer })
      ],
      providers: [
        { provide: NgSynonymsService, useValue: mockService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    mockService = new MockService();
    fixture = TestBed.createComponent(NgSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
