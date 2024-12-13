import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './core/components/app-navbar/app-navbar.component';
import { HomeComponent } from './Features/home/components/home-page/home.component';
import { AprendaComponent } from './aprenda/aprenda.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { AplicativosComponent } from './aplicativos/aplicativos.component';
import { AudiovisualComponent } from './audiovisual/audiovisual.component';
import { TitleCardListComponent } from './components/card-list/title-card-list/title-card-list.component';
import { CartilhaTudoComponent } from './cartilha/cartilha-tudo/cartilha-tudo.component';
import { CartilhaSalvosComponent } from './cartilha/cartilha-salvos/cartilha-salvos.component';
import { ActivitiesComponent } from './Features/home/components/home-page/components/activities/activities.component';
import { AnnouncementsComponent } from './Features/home/components/home-page/components/announcements/announcements.component';
import { ReminderComponent } from './Features/home/components/home-page/components/reminder/reminder.component';
import { CommonModule } from '@angular/common';
import { AnnouncementPageComponent } from './Features/home/pages/announcement-page/announcement-page.component';
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
    ReminderComponent,
    AnnouncementsComponent,
    ActivitiesComponent,
    AnnouncementPageComponent,
    ActivitiesPageComponent,
    ReminderPageComponent,
    CommunicationComponent,
    NewRequestComponent,
    NewRequestCardComponent,
    FollowUpComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
