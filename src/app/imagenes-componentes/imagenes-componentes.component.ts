import { Component, EventEmitter, OnInit, Output,Input  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoService } from '../photo.service';
import { ObjectImage } from '../model/objectImage';

@Component({
  selector: 'app-imagenes-componentes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imagenes-componentes.component.html',
  styleUrl: './imagenes-componentes.component.css'
})
export class ImagenesComponentesComponent {


  
  selectedPhoto : string | undefined;
  ListFotos: any[] = [];
  @Output() photoSelected = new EventEmitter<any>();

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe(p => {
      this.ListFotos = p;
    });
  }

  selectPhoto(index : number){
    this.selectedPhoto = this.ListFotos![index].url;
  }
}
