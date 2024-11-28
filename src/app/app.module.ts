import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './core/components/app-navbar/app-navbar.component';
import { HomeComponent } from './Features/home/components/home-page/home.component';
import { ActivitiesComponent } from './Features/home/components/home-page/components/activities/activities.component';
import { AnnouncementsComponent } from './Features/home/components/home-page/components/announcements/announcements.component';
import { ReminderComponent } from './Features/home/components/home-page/components/reminder/reminder.component';
import { CommonModule } from '@angular/common';
import { AnnouncementPageComponent } from './Features/home/pages/announcement-page/announcement-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    HomeComponent,
    ReminderComponent,
    AnnouncementsComponent,
    ActivitiesComponent,
    AnnouncementPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
