import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesComponentesComponent } from './imagenes-componentes.component';

describe('ImagenesComponentesComponent', () => {
  let component: ImagenesComponentesComponent;
  let fixture: ComponentFixture<ImagenesComponentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagenesComponentesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImagenesComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
