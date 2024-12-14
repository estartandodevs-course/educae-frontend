import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrl: './reminder.component.scss',
})
export class ReminderComponent {
  @Input() metas: any[] = []; // Lista de metas recebida da página
  @Output() atualizar = new EventEmitter<any>(); // Evento para atualizar uma meta
  @Output() excluir = new EventEmitter<any>(); // Evento para excluir uma meta
  @Output() adicionar = new EventEmitter<void>(); // Evento para adicionar uma meta

  atualizarMeta(meta: any) {
    this.atualizar.emit(meta); // Emite o evento para a página
  }

  excluirMeta(meta: any) {
    this.excluir.emit(meta); // Emite o evento para a página
  }

  adicionarMeta() {
    this.adicionar.emit(); // Emite o evento para adicionar uma nova meta
  }
}
