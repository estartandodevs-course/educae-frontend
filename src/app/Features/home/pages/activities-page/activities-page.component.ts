import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../../../shared/services/activity.service';
import { Atividade } from '../../../../shared/models/atividade.model';

@Component({
  selector: 'app-activities-page',
  templateUrl: './activities-page.component.html',
  styleUrl: './activities-page.component.scss',
})
export class ActivitiesPageComponent implements OnInit {
  atividades: Atividade[] = []; // Lista de todas as atividades (Home - Mobile)
  atividadesPendentes: Atividade[] = []; // Lista de atividades pendentes (Desktop)
  atividadesFinalizadas: Atividade[] = []; // Lista de atividades finalizadas (Desktop)

  constructor(private activityService: ActivityService) {}

  ngOnInit(): void {
    this.carregarAtividades(); // Carrega as atividades na inicialização
  }

  carregarAtividades(): void {
    this.atividades = this.activityService.getAtividades();
    this.atividadesPendentes = this.activityService.getPendentes();
    this.atividadesFinalizadas = this.activityService.getFinalizadas();
  }

  atualizarStatus(atividade: Atividade, feita: boolean): void {
    this.activityService.atualizarStatus(atividade, feita);
    this.carregarAtividades();
  }
}
