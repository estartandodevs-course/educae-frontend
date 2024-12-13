import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartilhaService {
  private savedCartilhas: { title: string; content?: string }[] = [];

  saveCartilha(cartilha: { title: string; content?: string }): void {
    const alreadySaved = this.savedCartilhas.some((c) => c.title === cartilha.title);
    if (!alreadySaved) {
      this.savedCartilhas.push(cartilha);
    }
  }

  removeCartilha(cartilha: { title: string }): void {
    this.savedCartilhas = this.savedCartilhas.filter((c) => c.title !== cartilha.title);
  }

  getSavedCartilhas(): { title: string; content?: string }[] {
    return this.savedCartilhas;
  }
}
