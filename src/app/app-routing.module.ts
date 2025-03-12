import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CapacitacionComponent } from './pages/capacitacion/capacitacion.component';
import { TecnologiaComponent } from './pages/tecnologia/tecnologia.component';
import { AboutComponent } from './pages/about/about.component';
import { BenefitsComponent } from './pages/benefits/benefits.component';
import { ContactComponent } from './pages/contact/contact.component';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PanelComponent } from './pages/panel/panel.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'capacitacion', component: CapacitacionComponent },
  { path: 'tecnologia', component: TecnologiaComponent },
  { path: 'about', component: AboutComponent },
  { path: 'benefits', component: BenefitsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'panel', component: PanelComponent },


  { path: '**', redirectTo: '' } // Redirige a Home si la ruta no existe
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
