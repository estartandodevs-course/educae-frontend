import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { HomeComponent } from './home/home.component';
import { AprendaComponent } from './aprenda/aprenda.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CartilhaComponent } from './cartilha/cartilha.component';
import { AplicativosComponent } from './aplicativos/aplicativos.component';
import { AudiovisualComponent } from './audiovisual/audiovisual.component';
import { TitleCardListComponent } from './components/card-list/title-card-list/title-card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    HomeComponent,
    AprendaComponent,
    CardListComponent,
    CartilhaComponent,
    AplicativosComponent,
    AudiovisualComponent,
    TitleCardListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
