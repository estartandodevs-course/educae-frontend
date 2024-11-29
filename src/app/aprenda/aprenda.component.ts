import { Component } from '@angular/core';

@Component({
  selector: 'app-aprenda',
  templateUrl: './aprenda.component.html',
  styleUrl: './aprenda.component.scss',
})
export class AprendaComponent {
  cartilhaTitle = 'Cartilha';

  cartilhaDetailsTitle_1 = 'Guia para Leigos sobre o TEA';
  cartilhaContent1 =
    'O Guia para leigos sobre o Transtorno do Espectro Autista é uma coletânea de textos publicados no Blog Autismo e Realidade.';

  cartilhaDetailsTitle_2 = 'Cartilha: Autismo e Educação';

  cartilhaDetailsTitle_3 = 'Cartilha Autismo: Uma Realidade';

  //------------------------------------------------------------

  aplicativosTitle = 'Aplicativos';

  aplicativosDetailsTitle_1 = 'LIVOX';

  aplicativosDetailsTitle_2 = 'Tippy Talk';

  aplicativosDetailsTitle_3 = 'InFlow';

  //------------------------------------------------------------

  audiovisualTitle = 'Audiovisual';

  audiovisualDetailsTitle_1 = 'Podcast Lógica Autista';

  audiovisualDetailsTitle_2 = 'Canal TDAH Descomplicado';

  audiovisualDetailsTitle_3 = 'Introvertendo';
}
