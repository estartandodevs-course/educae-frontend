import { Component } from '@angular/core';

@Component({
  selector: 'app-announcement-page',
  templateUrl: './announcement-page.component.html',
  styleUrl: './announcement-page.component.scss',
})
export class AnnouncementPageComponent {
  comunicados = [
    {
      titulo: 'Feriado dia de finados',
      descricao:
        'Informamos que, devido ao feriado de Finados, não haverá aula no dia 2 de novembro de 2024. As atividades serão retomadas normalmente no dia 3 de novembro.  ',
      date: 'Postado dia: 28/10/2024',
    },
    {
      titulo: 'Recesso',
      descricao:
        'Comunicamos que no dia 11 de novembro entraremos em recesso devido aos processos internos que estão acontecendo na escola. Devido à isso, não haverá aula. ',
      date: 'Postado dia: 01/07/2024',
    },
    {
      titulo: 'Feira de adoção',
      descricao:
        'Comunicamos que no dia 4 de novembro entraremos organizando uma feira de adoção dentro da nossa escola, a partir das 9h:15. Não perca!Entrada gratuita. ',
      date: 'Postado dia: 26/10/2024',
    },
  ];
}
