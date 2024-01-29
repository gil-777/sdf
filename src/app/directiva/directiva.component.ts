import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directiva',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directiva.component.html',
  styleUrl: './directiva.component.css'
})
export class DirectivaComponent {
  listaCurso:string[] =['TypeScript','JavaScript','JAVA SE','C#','PHP'];
  habilitar:boolean=true;
  constructor(){}
}
