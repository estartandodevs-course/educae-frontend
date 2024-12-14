import { Component, Input } from '@angular/core';
import { ActivityService } from '../../../../../../shared/services/activity.service';
import { Atividade } from '../../../../../../shared/models/atividade.model';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent {
  @Input() atividades: Atividade[] = [];

  constructor(private activityService: ActivityService) {}

  ngOnInit(): void {}

  enviarAtividade(atividade: Atividade, checkbox: HTMLInputElement): void {
    this.activityService.atualizarStatus(atividade, checkbox.checked);
    checkbox.checked = true; // Atualiza o checkbox visualmente.
    atividade.feita = true; // Atualiza localmente o estado.
  }
}
