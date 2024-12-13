import { Component } from '@angular/core';
import { Solicitacao, SolicitacaoService } from '../../../../shared/services/solicitacao.service';

@Component({
  selector: 'app-follow-up',
  templateUrl: './follow-up.component.html',
  styleUrl: './follow-up.component.scss',
})
export class FollowUpComponent {
  solicitacoes: Solicitacao[] = [];

  constructor(private solicitacaoService: SolicitacaoService) {}

  ngOnInit() {
    this.solicitacaoService.getSolicitacoes().subscribe((data) => {
      this.solicitacoes = data;
    });
  }
}
