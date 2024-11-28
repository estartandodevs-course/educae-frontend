import { Component } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.scss',
})
export class ActivitiesComponent {
  atividades = [
    {
      titulo: 'Trabalho de Matemática',
      dataEntrega: '2024/11/20',
      feita: false,
      nota: 0,
    },
    {
      titulo: 'Redação sobre meio ambiente',
      dataEntrega: '2024/11/22',
      feita: false,
      nota: 0,
    },
  ];
  marcarFeita(atividade: any) {
    console.log(`${atividade.titulo} marcada como ${atividade.feita ? 'feita' : 'não feita'}`);
  }
}
