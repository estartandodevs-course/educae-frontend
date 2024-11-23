import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './core/components/app-navbar/app-navbar.component';
import { HomeComponent } from './Features/home/components/home-page/home.component';

@NgModule({
  declarations: [AppComponent, AppNavbarComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
