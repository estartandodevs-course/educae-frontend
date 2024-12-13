import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-title-card-list',
  templateUrl: './title-card-list.component.html',
  styleUrl: './title-card-list.component.scss',
})
export class TitleCardListComponent {
  @Input() titleCardList: string = 'teste';
  @Input() verTudo: string = 'teste';
}
