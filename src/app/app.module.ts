import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './core/components/app-navbar/app-navbar.component';
import { HomeComponent } from './Features/home/components/home-page/home.component';
import { AnnouncementsComponent } from './Features/home/components/home-page/components/announcements/announcements.component';
import { ActivitiesComponent } from './Features/home/components/home-page/components/activities/activities.component';
import { ReminderComponent } from './Features/home/components/home-page/components/reminder/reminder.component';
import { AnnouncementPageComponent } from './Features/home/pages/announcement-page/announcement-page.component';
import { ReminderCardComponent } from './Features/home/components/home-page/components/reminder/reminder-card/reminder-card.component';
import { AnnouncementCardComponent } from './Features/home/components/home-page/components/announcements/announcement-card/announcement-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    HomeComponent,
    AnnouncementsComponent,
    ActivitiesComponent,
    ReminderComponent,
    AnnouncementPageComponent,
    ReminderCardComponent,
    AnnouncementCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
