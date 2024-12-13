import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Solicitacao, SolicitacaoService } from '../../../../shared/services/solicitacao.service';

@Component({
  selector: 'app-new-request-card',
  templateUrl: './new-request-card.component.html',
  styleUrl: './new-request-card.component.scss',
})
export class NewRequestCardComponent {
  solicitacao: Partial<Solicitacao> = {
    anonimo: false,
  };

  constructor(private solicitacaoService: SolicitacaoService) {}

  enviarSolicitacao() {
    if (this.solicitacao.assunto && this.solicitacao.conteudo) {
      const novaSolicitacao: Solicitacao = {
        id: Date.now(), // ID único baseado no timestamp
        assunto: this.solicitacao.assunto!,
        conteudo: this.solicitacao.conteudo!,
        anonimo: this.solicitacao.anonimo!,
        status: 'aberta',
        data: new Date().toISOString().split('T')[0], // Data no formato "YYYY-MM-DD"
      };

      this.solicitacaoService.addSolicitacao(novaSolicitacao);
      alert('Solicitação enviada com sucesso!');
      this.solicitacao = { anonimo: false }; // Reseta o formulário
    } else {
      alert('Preencha todos os campos!');
    }
  }
}
