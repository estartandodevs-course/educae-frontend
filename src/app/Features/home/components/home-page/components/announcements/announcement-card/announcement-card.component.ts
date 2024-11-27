import { Component } from '@angular/core';

@Component({
  selector: 'app-announcement-card',
  templateUrl: './announcement-card.component.html',
  styleUrl: './announcement-card.component.scss',
})
export class AnnouncementCardComponent {
  comunicados = [
    { titulo: 'Bem-vindo!', descricao: 'Este é o comunicado inicial. bla bla bla bla bla bla bla bla bla' },
    { titulo: 'Bem-vindo!', descricao: 'Este é o comunicado inicial. bla bla bla bla bla bla bla bla bla' },
  ];
}
