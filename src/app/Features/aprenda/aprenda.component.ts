import { Component } from '@angular/core';

@Component({
  selector: 'app-aprenda',
  templateUrl: './aprenda.component.html',
  styleUrl: './aprenda.component.scss',
})
export class AprendaComponent {
  searchQuery: string = '';

  cartilhas = [
    {
      title: 'Guia para Leigos sobre o TEA',
      content:
        'O Guia para leigos sobre o Transtorno do Espectro Autista é uma coletânea de textos publicados no Blog Autismo e Realidade.',
    },
    {
      title: 'Cartilha: Autismo e Educação',
      content:
        'Compilado de informações sobre autismo, o que é, possíveis causas, primeiros sinais, direitos fundamentais da pessoa com autismo e endereços de atendimentos.',
    },
    {
      title: 'Cartilha Autismo: Uma Realidade',
      content:
        'Nesta conversa desenhada, o autor quer falar com professores, pais, mães e profissionais de saúde, sobre milhares de crianças que estão precisando de sua atenção para começarem a ultrapassar as barreiras do autismo. Como ajudá-las? e como é, na realidade, o autismo? leia nesta cartilha.',
    },
  ];

  aplicativos = [{ title: 'LIVOX' }, { title: 'Tippy Talk' }, { title: 'InFlow' }];

  audiovisual = [{ title: 'Podcast Lógica Autista' }, { title: 'Canal TDAH Descomplicado' }, { title: 'Introvertendo' }];

  onSearchChange(query: string): void {
    this.searchQuery = query.toLowerCase();
  }

  //-------------------------------------------------------------
  cartilhaTitle = 'Cartilha';

  cartilhaDetailsTitle_1 = 'Guia para Leigos sobre o TEA';
  cartilhaContent1 =
    'O Guia para leigos sobre o Transtorno do Espectro Autista é uma coletânea de textos publicados no Blog Autismo e Realidade.';

  cartilhaDetailsTitle_2 = 'Cartilha: Autismo e Educação';
  cartilhaContent2 =
    'Compilado de informações sobre autismo, o que é, possíveis causas, primeiros sinais, direitos fundamentais da pessoa com autismo e endereços de atendimentos.';

  cartilhaDetailsTitle_3 = 'Cartilha Autismo: Uma Realidade';
  cartilhaContent3 =
    'Nesta conversa desenhada, o autor quer falar com professores, pais, mães e profissionais de saúde, sobre milhares de crianças que estão precisando de sua atenção para começarem a ultrapassar as barreiras do autismo. Como ajudá-las? e como é, na realidade, o autismo? leia nesta cartilha.';

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
