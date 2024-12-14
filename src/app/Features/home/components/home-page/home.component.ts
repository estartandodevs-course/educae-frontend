import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../../../shared/services/activity.service';
import { Atividade } from '../../../../shared/models/atividade.model';
import { MetasService } from '../../../../shared/services/metas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  atividades: Atividade[] = []; // Lista de atividades reais
  metas: any[] = []; // Lista de metas
  metasPendentes: any[] = []; // Metas pendentes
  metasFinalizadas: any[] = []; // Metas finalizadas

  constructor(
    private metasService: MetasService,
    private activityService: ActivityService, // Injetar corretamente o serviço aqui
  ) {}

  ngOnInit() {
    this.carregarMetas();
    this.carregarAtividades();
  }

  carregarMetas() {
    // Carregar as metas filtradas no serviço (pendentes ou finalizadas)
    this.metasService.metasFiltradas$.subscribe((metasFiltradas) => {
      this.metas = metasFiltradas;
      this.metasPendentes = metasFiltradas.filter((meta) => !meta.concluida);
      this.metasFinalizadas = metasFiltradas.filter((meta) => meta.concluida);
    });
  }

  carregarAtividades() {
    // Buscar as atividades reais do serviço
    this.atividades = this.activityService.getAtividades();
  }
}
