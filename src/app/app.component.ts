import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { ImagenesComponentesComponent } from "./imagenes-componentes/imagenes-componentes.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ImagenesComponentesComponent]
})
export class AppComponent {
  title = 'punto4';
}
