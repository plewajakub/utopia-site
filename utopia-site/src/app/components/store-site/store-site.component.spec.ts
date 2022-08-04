import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreSiteComponent } from './store-site.component';

describe('StoreSiteComponent', () => {
  let component: StoreSiteComponent;
  let fixture: ComponentFixture<StoreSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreSiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
