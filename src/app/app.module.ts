import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { HomeComponent } from './home/home.component';
import { AprendaComponent } from './aprenda/aprenda.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { AplicativosComponent } from './aplicativos/aplicativos.component';
import { AudiovisualComponent } from './audiovisual/audiovisual.component';
import { TitleCardListComponent } from './components/card-list/title-card-list/title-card-list.component';
import { CartilhaTudoComponent } from './cartilha/cartilha-tudo/cartilha-tudo.component';
import { CartilhaSalvosComponent } from './cartilha/cartilha-salvos/cartilha-salvos.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
