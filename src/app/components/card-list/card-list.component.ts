import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
})
export class CardListComponent {
  @Input() summaryTitle: string = 'teste';
  @Input() summaryParagraph: string = 'teste';
}
