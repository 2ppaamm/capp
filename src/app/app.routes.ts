import {Routes, RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LandingComponent} from "./landing/landing.component";
import {ContactComponent} from "./contact/contact.component";
import {AboutComponent} from "./about/about.component";
import {ModuleWithProviders} from "@angular/core";
import {AdminComponent} from './admin/admin.component';
import {adminRoutes} from './admin/admin.routes';
import {AuthGuardService} from './services/auth-guard.service';


const appRoutes: Routes = [
  { path: '', redirectTo:'/', pathMatch: 'full'},
  { path: '', component: LandingComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'about', component: AboutComponent},
  { path: 'admin', component: AdminComponent, children: adminRoutes, canActivate: [AuthGuardService]},

];

export const routes:ModuleWithProviders = RouterModule.forRoot(appRoutes);