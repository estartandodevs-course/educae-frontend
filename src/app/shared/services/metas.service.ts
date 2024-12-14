import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Meta {
  titulo: string;
  concluida: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class MetasService {
  private todasMetas: Meta[] = [
    { titulo: 'Estudar Angular', concluida: false },
    { titulo: 'Praticar TypeScript', concluida: true },
  ];

  // BehaviorSubject para monitorar mudanças nas metas filtradas
  private metasFiltradasSubject = new BehaviorSubject<Meta[]>([]);
  metasFiltradas$ = this.metasFiltradasSubject.asObservable();

  filtroAtual = 'pendentes'; // Filtro inicial

  constructor() {
    this.filtrarMetas(this.filtroAtual); // Inicializa com o filtro padrão
  }

  filtrarMetas(filtro: string) {
    this.filtroAtual = filtro;
    let filtradas: Meta[];
    if (filtro === 'pendentes') {
      filtradas = this.todasMetas.filter((meta) => !meta.concluida);
    } else if (filtro === 'finalizadas') {
      filtradas = this.todasMetas.filter((meta) => meta.concluida);
    } else {
      filtradas = [...this.todasMetas];
    }

    // Atualiza o BehaviorSubject
    this.metasFiltradasSubject.next(filtradas);
  }
  atualizarMeta(meta: Meta) {
    const index = this.todasMetas.findIndex((m) => m === meta);
    if (index !== -1) {
      this.todasMetas[index].concluida = !this.todasMetas[index].concluida;
      this.filtrarMetas(this.filtroAtual); // Atualiza a lista filtrada
    }
  }
  adicionarMeta(titulo: string) {
    const novaMeta: Meta = { titulo, concluida: false };
    this.todasMetas.push(novaMeta);
    this.filtrarMetas(this.filtroAtual);
  }

  excluirMeta(meta: Meta) {
    this.todasMetas = this.todasMetas.filter((m) => m !== meta);
    this.filtrarMetas(this.filtroAtual);
  }

  // Método para obter as metas filtradas (opcional)
  obterMetas(): Meta[] {
    return [...this.todasMetas];
  }
}
