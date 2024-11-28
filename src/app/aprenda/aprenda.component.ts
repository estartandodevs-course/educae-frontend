import { Component } from '@angular/core';

@Component({
  selector: 'app-aprenda',
  templateUrl: './aprenda.component.html',
  styleUrl: './aprenda.component.scss',
})
export class AprendaComponent {
  cartilhaTitle = 'Cartilha';
  cartilhaDetailsTitle = 'Guia para Leigos sobre o TEA';
  cartilhaParagraph =
    'O Guia para leigos sobre o Transtorno do Espectro Autista é uma coletânea de textos publicados no Blog Autismo e Realidade.';
}
