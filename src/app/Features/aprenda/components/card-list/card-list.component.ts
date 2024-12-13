import { Component, Input } from '@angular/core';
import { CartilhaService } from '../../../../services/cartilha.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
})
export class CardListComponent {
  @Input() summaryTitle: string = 'teste';
  @Input() summaryParagraph: string = 'Em produção';

  isSaved: boolean = false;

  constructor(private cartilhaService: CartilhaService) {}

  saveCartilha(): void {
    this.isSaved = !this.isSaved;
    if (this.isSaved) {
      this.cartilhaService.saveCartilha({
        title: this.summaryTitle,
        content: this.summaryParagraph,
      });
    } else {
      this.cartilhaService.removeCartilha({
        title: this.summaryTitle,
      });
    }
  }
}
