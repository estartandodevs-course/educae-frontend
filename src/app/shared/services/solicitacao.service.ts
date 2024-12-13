import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface Solicitacao {
  id: number;
  assunto: string;
  conteudo: string;
  anonimo: boolean;
  status: 'aberta' | 'fechada';
  resposta?: string;
  data: string;
}

@Injectable({
  providedIn: 'root',
})
export class SolicitacaoService {
  private solicitacoes = new BehaviorSubject<Solicitacao[]>(this.loadSolicitacoes());

  private loadSolicitacoes(): Solicitacao[] {
    const data = localStorage.getItem('solicitacoes');
    return data ? JSON.parse(data) : [];
  }

  private saveSolicitacoes(solicitacoes: Solicitacao[]) {
    localStorage.setItem('solicitacoes', JSON.stringify(solicitacoes));
  }

  getSolicitacoes() {
    return this.solicitacoes.asObservable();
  }

  addSolicitacao(solicitacao: Solicitacao) {
    const current = this.solicitacoes.getValue();
    const updated = [...current, solicitacao];
    this.solicitacoes.next(updated);
    this.saveSolicitacoes(updated);
  }
}
