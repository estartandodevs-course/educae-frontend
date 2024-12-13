import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './core/components/app-navbar/app-navbar.component';
import { HomeComponent } from './Features/home/components/home-page/home.component';
import { AprendaComponent } from './Features/aprenda/aprenda.component';
import { CardListComponent } from './Features/aprenda/components/card-list/card-list.component';
import { AplicativosComponent } from './Features/aprenda/components/aplicativos/aplicativos.component';
import { AudiovisualComponent } from './Features/aprenda/components/audiovisual/audiovisual.component';
import { TitleCardListComponent } from './Features/aprenda/components/title-card-list/title-card-list.component';
import { CartilhaTudoComponent } from './Features/aprenda/components/cartilha/cartilha-tudo/cartilha-tudo.component';
import { CartilhaSalvosComponent } from './Features/aprenda/components/cartilha/cartilha-salvos/cartilha-salvos.component';
import { ActivitiesComponent } from './Features/home/components/home-page/components/activities/activities.component';
import { AnnouncementsComponent } from './Features/home/components/home-page/components/announcements/announcements.component';
import { ReminderComponent } from './Features/home/components/home-page/components/reminder/reminder.component';
import { CommonModule } from '@angular/common';
import { AnnouncementPageComponent } from './Features/home/pages/announcement-page/announcement-page.component';
import { RouterModule } from '@angular/router';
import { HeaderAprendaComponent } from './Features/aprenda/components/header-aprenda/header-aprenda.component';
import { SearchBarComponent } from './Features/aprenda/components/search-bar/search-bar.component';
import { PerfilAlunoComponent } from './Features/perfil/perfil-aluno/perfil-aluno.component';
import { PerfilProfessorComponent } from './Features/perfil/perfil-professor/perfil-professor.component';
import { HeaderComponent } from './Features/perfil/components/header/header.component';
import { PerfilUsuarioComponent } from './Features/perfil/components/perfil-usuario/perfil-usuario.component';
import { HistoricoComponent } from './Features/perfil/components/historico/historico.component';
import { ConfiguracoesComponent } from './Features/perfil/components/configuracoes/configuracoes.component';
import { ContaComponent } from './Features/perfil/conta/conta.component';
import { NotificacoesComponent } from './Features/perfil/notificacoes/notificacoes.component';
import { CommunicationComponent } from './Features/Comunicação/communication.component';
import { FollowUpComponent } from './Features/Comunicação/components/follow-up/follow-up.component';
import { NewRequestCardComponent } from './Features/Comunicação/components/new-request-card/new-request-card.component';
import { NewRequestComponent } from './Features/Comunicação/pages/new-request-page/new-request.component';
import { ActivitiesPageComponent } from './Features/home/pages/activities-page/activities-page.component';
import { ReminderPageComponent } from './Features/home/pages/reminder-page/reminder-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    HomeComponent,
    AprendaComponent,
    CardListComponent,
    AplicativosComponent,
    AudiovisualComponent,
    TitleCardListComponent,
    CartilhaTudoComponent,
    CartilhaSalvosComponent,
    ReminderComponent,
    AnnouncementsComponent,
    ActivitiesComponent,
    AnnouncementPageComponent,
    HeaderAprendaComponent,
    SearchBarComponent,
    PerfilAlunoComponent,
    PerfilProfessorComponent,
    HeaderComponent,
    PerfilUsuarioComponent,
    HistoricoComponent,
    ConfiguracoesComponent,
    ContaComponent,
    NotificacoesComponent,
    ActivitiesPageComponent,
    ReminderPageComponent,
    CommunicationComponent,
    NewRequestComponent,
    NewRequestCardComponent,
    FollowUpComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, CommonModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
