import { Component } from '@angular/core';
import { Meta, MetasService } from '../../../../shared/services/metas.service';

@Component({
  selector: 'app-reminder-page',
  templateUrl: './reminder-page.component.html',
  styleUrl: './reminder-page.component.scss',
})
export class ReminderPageComponent {
  metas: Meta[] = []; // Todas as metas
  metasPendentes: Meta[] = []; // Metas pendentes (desktop)
  metasFinalizadas: Meta[] = []; // Metas finalizadas (desktop)
  metasFiltradas: Meta[] = []; // Metas filtradas para mobile
  filtroAtual: string = 'todas'; // Valor do filtro no mobile ('todas', 'pendentes', 'finalizadas')

  showLabel: boolean = false; // Controla se a label para adicionar meta está visível
  newMetaTitle: string = ''; // Título da nova meta a ser adicionada

  constructor(private metasService: MetasService) {}

  ngOnInit() {
    this.atualizarListas();
  }

  // Atualiza as listas gerais (usadas no desktop) e aplica o filtro no mobile
  atualizarListas() {
    this.metas = this.metasService.obterMetas();

    // Atualizar listas para desktop
    this.metasPendentes = this.metas.filter((meta) => !meta.concluida);
    this.metasFinalizadas = this.metas.filter((meta) => meta.concluida);

    // Atualizar lista filtrada para mobile
    this.filtrarMetas(); // Aplica o filtro atual
  }

  // Filtra as metas para o mobile com base no filtro selecionado
  filtrarMetas() {
    if (this.filtroAtual === 'pendentes') {
      this.metasFiltradas = this.metasPendentes;
    } else if (this.filtroAtual === 'finalizadas') {
      this.metasFiltradas = this.metasFinalizadas;
    } else {
      this.metasFiltradas = this.metas;
    }
  }

  // Métodos gerais de manipulação de metas
  atualizarMeta(meta: Meta) {
    this.metasService.atualizarMeta(meta);
    this.atualizarListas(); // Atualiza tanto desktop quanto mobile
  }

  excluirMeta(meta: Meta) {
    this.metasService.excluirMeta(meta);
    this.atualizarListas(); // Atualiza tanto desktop quanto mobile
  }

  // Métodos para Adicionar Nova Meta
  toggleLabel() {
    this.showLabel = !this.showLabel; // Alterna a visibilidade da label
  }

  salvarNovaMeta() {
    if (this.newMetaTitle.trim() !== '') {
      this.metasService.adicionarMeta(this.newMetaTitle.trim());
      this.newMetaTitle = ''; // Limpa o campo após salvar
      this.showLabel = false; // Fecha a label
      this.atualizarListas(); // Atualiza as listas
    } else {
      alert('O título da meta não pode estar vazio.');
    }
  }
}
