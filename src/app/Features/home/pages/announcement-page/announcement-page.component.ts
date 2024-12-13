import { Component } from '@angular/core';

@Component({
  selector: 'app-announcement-page',
  templateUrl: './announcement-page.component.html',
  styleUrl: './announcement-page.component.scss',
})
export class AnnouncementPageComponent {
  comunicados = [
    {
      titulo: 'Bem-vindo!',
      descricao: 'Este é o comunicado inicial. bla bla bla bla bla bla bla bla bla',
      date: 'Postado dia:22/10/2001',
    },
    {
      titulo: 'Bem-vindo!',
      descricao: 'Este é o comunicado inicial. bla bla bla bla bla bla bla bla bla',
      date: 'Postado dia:22/10/2001',
    },
    {
      titulo: 'Bem-vindo!',
      descricao: 'Este é o comunicado inicial. bla bla bla bla bla bla bla bla bla',
      date: 'Postado dia:22/10/2001',
    },
  ];
}
