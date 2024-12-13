import { Component, OnInit } from '@angular/core';
import { CartilhaService } from '../../../../../services/cartilha.service';

@Component({
  selector: 'app-cartilha-salvos',
  templateUrl: './cartilha-salvos.component.html',
  styleUrl: './cartilha-salvos.component.scss',
})
export class CartilhaSalvosComponent implements OnInit {
  savedCartilhas: { title: string; content?: string }[] = [];

  constructor(private cartilhaService: CartilhaService) {}

  ngOnInit(): void {
    this.savedCartilhas = this.cartilhaService.getSavedCartilhas();
  }
}
