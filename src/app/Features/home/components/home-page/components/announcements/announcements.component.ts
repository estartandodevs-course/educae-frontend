import { Component } from '@angular/core';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrl: './announcements.component.scss',
})
export class AnnouncementsComponent {
  comunicados = [
    {
      titulo: 'Feriado dia de finados',
      descricao:
        'Informamos que, devido ao feriado de Finados, não haverá aula no dia 2 de novembro de 2024. As atividades serão retomadas normalmente no dia 3 de novembro. ',
      date: '22/10/2001',
    },
  ];
}
