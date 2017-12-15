import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubComponent } from './github.component';
import {HttpClient} from '@angular/common/http';
const httpClientStub = {};
describe('GithubComponent', () => {
  let component: GithubComponent;
  let fixture: ComponentFixture<GithubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubComponent ],
      providers: [
        {provide: HttpClient, useValue: httpClientStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
