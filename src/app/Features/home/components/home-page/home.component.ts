import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  // comunicados = [{ titulo: 'Bem-vindo!', descricao: 'Este é o comunicado inicial. bla bla bla bla bla bla bla bla bla' }];
  // atividades = [
  //   {
  //     titulo: 'Trabalho de Matemática',
  //     dataEntrega: new Date('2024-11-20'),
  //     feita: false,
  //     nota: 0,
  //   },
  //   {
  //     titulo: 'Redação sobre meio ambiente',
  //     dataEntrega: new Date('2024-11-22'),
  //     feita: false,
  //     nota: 0,
  //   },
  // ];
  // // Função para marcar uma meta como concluída
  // marcarMetaConcluida(meta: any) {
  //   console.log(`${meta.titulo} marcada como ${meta.concluida ? 'concluída' : 'não concluída'}`);
  // }
  // // Função para marcar uma atividade como feita
  // marcarFeita(atividade: any) {
  //   console.log(`${atividade.titulo} marcada como ${atividade.feita ? 'feita' : 'não feita'}`);
  // }
  // metas = [
  //   { titulo: 'Estudar Angular', concluida: false },
  //   { titulo: 'Praticar TypeScript', concluida: true },
  // ];
  // metasFiltradas = [...this.metas];
  // filtroAtual = 'todas';
  // verMaisComunicados() {
  //   console.log('Abrir tela com todos os comunicados...');
  //   // Aqui você pode navegar para outra rota ou exibir um modal
  // }
  // atualizarMeta(meta: any) {
  //   const index = this.metas.findIndex((m) => m.titulo === meta.titulo);
  //   if (index !== -1) {
  //     this.metas[index] = meta;
  //   }
  //   this.filtrarMetas(this.filtroAtual); // Refiltra após a alteração
  // }
  // filtrarMetas(filtro: string) {
  //   this.filtroAtual = filtro;
  //   if (filtro === 'todas') {
  //     this.metasFiltradas = [...this.metas];
  //   } else if (filtro === 'pendentes') {
  //     this.metasFiltradas = this.metas.filter((meta) => !meta.concluida);
  //   } else if (filtro === 'finalizadas') {
  //     this.metasFiltradas = this.metas.filter((meta) => meta.concluida);
  //   }
  // }
  // adicionarMeta() {
  //   const novaMeta = prompt('Digite a nova meta:');
  //   if (novaMeta) {
  //     this.metas.push({ titulo: novaMeta, concluida: false });
  //     this.filtrarMetas(this.filtroAtual);
  //   }
  // }
}
