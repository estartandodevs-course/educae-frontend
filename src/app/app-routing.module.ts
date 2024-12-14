import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Features/home/components/home-page/home.component';
import { AnnouncementPageComponent } from './Features/home/pages/announcement-page/announcement-page.component';
import { AprendaComponent } from './Features/aprenda/aprenda.component';
import { CartilhaTudoComponent } from './Features/aprenda/components/cartilha/cartilha-tudo/cartilha-tudo.component';
import { CartilhaSalvosComponent } from './Features/aprenda/components/cartilha/cartilha-salvos/cartilha-salvos.component';
import { AplicativosComponent } from './Features/aprenda/components/aplicativos/aplicativos.component';
import { AudiovisualComponent } from './Features/aprenda/components/audiovisual/audiovisual.component';
import { PerfilAlunoComponent } from './Features/perfil/perfil-aluno/perfil-aluno.component';
import { CommunicationComponent } from './Features/Comunicação/communication.component';
import { FollowUpComponent } from './Features/Comunicação/components/follow-up/follow-up.component';
import { NewRequestCardComponent } from './Features/Comunicação/components/new-request-card/new-request-card.component';
import { ActivitiesPageComponent } from './Features/home/pages/activities-page/activities-page.component';
import { ReminderPageComponent } from './Features/home/pages/reminder-page/reminder-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'announcement',
    component: AnnouncementPageComponent,
  },

  {
    path: 'aprenda',
    component: AprendaComponent,
  },

  {
    path: 'cartilhas',
    component: CartilhaTudoComponent,
  },

  {
    path: 'cartilhas-salvo',
    component: CartilhaSalvosComponent,
  },

  {
    path: 'aplicativos',
    component: AplicativosComponent,
  },

  {
    path: 'audiovisual',
    component: AudiovisualComponent,
  },

  {
    path: 'perfil',
    component: PerfilAlunoComponent,
  },
  {
    path: 'activities',
    component: ActivitiesPageComponent,
  },

  {
    path: 'reminder',
    component: ReminderPageComponent,
  },

  // Comunicação
  {
    path: 'communication',
    component: CommunicationComponent,
  },

  {
    path: 'new-request',
    component: NewRequestCardComponent, // Nova solicitação
  },

  {
    path: 'tracking',
    component: FollowUpComponent, // Acompanhamento
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
