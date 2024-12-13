import { Injectable } from '@angular/core';
import { Atividade } from '../models/atividade.model';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  private atividades: Atividade[] = [
    {
      titulo: 'Trabalho de Matemática',
      dataEntrega: '2024/11/20',
      feita: false,
      nota: 0,
    },

    {
      titulo: 'Calculo 1',
      dataEntrega: '2024/11/20',
      feita: false,
      nota: 0,
    },
    {
      titulo: 'Fisica e matematica',
      dataEntrega: '2024/11/22',
      feita: true,
      nota: 4,
    },
  ];

  getAtividades(): Atividade[] {
    // Retorna todas as atividades, cumpridas ou não
    return this.atividades;
  }

  getPendentes(): Atividade[] {
    // Retorna apenas as atividades não concluídas
    return this.atividades.filter((atividade) => !atividade.feita);
  }

  getFinalizadas(): Atividade[] {
    // Retorna apenas as atividades concluídas
    return this.atividades.filter((atividade) => atividade.feita);
  }

  atualizarStatus(atividadeAtualizada: Atividade, feita: boolean): void {
    // Atualiza o status de uma atividade específica
    const atividade = this.atividades.find((a) => a.titulo === atividadeAtualizada.titulo);
    if (atividade) {
      atividade.feita = feita;
    }
  }
}
