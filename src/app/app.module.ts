import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { ReactiveFormsModule } from '@angular/forms';

// Shared
import { HeaderComponent } from './shared/header/header.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { FooterComponent } from './shared/footer/footer.component';
// Pages
import { HomeComponent } from './pages/home/home.component';
import { CapacitacionComponent } from './pages/capacitacion/capacitacion.component';
import { TecnologiaComponent } from './pages/tecnologia/tecnologia.component';
import { AboutComponent } from './pages/about/about.component';
import { BenefitsComponent } from './pages/benefits/benefits.component';
import { ContactComponent } from './pages/contact/contact.component';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PanelComponent } from './pages/panel/panel.component';
import { AuthService } from './services/auth';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    CapacitacionComponent,
    TecnologiaComponent,
    AboutComponent,
    BenefitsComponent,
    ContactComponent,
    IniciarSesionComponent,
    RegistroComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatIconModule,
    ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
