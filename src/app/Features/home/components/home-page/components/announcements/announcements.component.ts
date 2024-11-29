import { Component } from '@angular/core';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrl: './announcements.component.scss',
})
export class AnnouncementsComponent {
  comunicados = [
    { titulo: 'Bem-vindo!', descricao: 'Este é o comunicado inicial. bla bla bla bla bla bla bla bla bla' },
    { titulo: 'Bem-vindo!', descricao: 'Este é o comunicado inicial. bla bla bla bla bla bla bla bla bla' },
  ];
}
