import { Component } from '@angular/core';

@Component({
  selector: 'app-reminder-card',
  templateUrl: './reminder-card.component.html',
  styleUrl: './reminder-card.component.scss',
})
export class ReminderCardComponent {
  metas = [
    { titulo: 'Estudar Angular', concluida: false },
    { titulo: 'Praticar TypeScript', concluida: true },
  ];

  metasFiltradas = [...this.metas];
  filtroAtual = 'todas';

  atualizarMeta(meta: any) {
    const index = this.metas.findIndex((m) => m.titulo === meta.titulo);
    if (index !== -1) {
      this.metas[index] = meta;
    }
    this.filtrarMetas(this.filtroAtual); // Refiltra após a alteração
  }
  filtrarMetas(filtro: string) {
    this.filtroAtual = filtro;
    if (filtro === 'todas') {
      this.metasFiltradas = [...this.metas];
    } else if (filtro === 'pendentes') {
      this.metasFiltradas = this.metas.filter((meta) => !meta.concluida);
    } else if (filtro === 'finalizadas') {
      this.metasFiltradas = this.metas.filter((meta) => meta.concluida);
    }
  }

  adicionarMeta() {
    const novaMeta = prompt('Digite a nova meta:');
    if (novaMeta) {
      this.metas.push({ titulo: novaMeta, concluida: false });
      this.filtrarMetas(this.filtroAtual);
    }
  }
  marcarFeita(atividade: any) {
    console.log(`${atividade.titulo} marcada como ${atividade.feita ? 'feita' : 'não feita'}`);
  }
}
