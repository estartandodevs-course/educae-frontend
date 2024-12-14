import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Solicitacao, SolicitacaoService } from '../../shared/services/solicitacao.service';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrl: './communication.component.scss',
})
export class CommunicationComponent {
  solicitacao: Partial<Solicitacao> = {
    anonimo: false,
    status: 'aberta',
    data: new Date().toISOString().split('T')[0],
  };

  constructor(
    private service: SolicitacaoService,
    private router: Router,
  ) {}

  enviarSolicitacao() {
    if (this.solicitacao.assunto && this.solicitacao.conteudo) {
      this.service.addSolicitacao(this.solicitacao as Solicitacao);
      this.router.navigate(['/']);
    }
  }
}
