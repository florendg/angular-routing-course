import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboCardViewComponent } from './combo-card-view.component';
import {BreadcrumbsComponent} from "../shared-ui/breadcrumbs/breadcrumbs.component";

describe('ComboCardViewComponent', () => {
  let component: ComboCardViewComponent;
  let fixture: ComponentFixture<ComboCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ComboCardViewComponent, BreadcrumbsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComboCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
