import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from "@ngrx/store";
import { NgButtonComponent } from './ng-button.component';
import { synonymsReducer } from "../reducers/synonyms";
import { NgSynonymsService } from "../services/synonyms/ng-synonyms.service";

class MockService {
  findSynonyms(word) {
    return this;
  }
}

describe('NgButtonComponent', () => {
  let component: NgButtonComponent;
  let fixture: ComponentFixture<NgButtonComponent>;
  let mockService;

  beforeEach(async(() => {
    mockService = new MockService();
    TestBed.configureTestingModule({
      declarations: [
        NgButtonComponent
      ],
      imports : [
        StoreModule.provideStore({ synonyms: synonymsReducer })
      ],
      providers: [
        { provide: NgSynonymsService, useValue: mockService }
      ],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
