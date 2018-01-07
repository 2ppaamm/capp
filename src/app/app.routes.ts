import {Routes, RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ContactComponent} from "./contact/contact.component";
import {AboutComponent} from "./about/about.component";
import {ModuleWithProviders} from "@angular/core";

const appRoutes: Routes = [
  { path: '', redirectTo:'/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'about', component: AboutComponent}
];

export const routes:ModuleWithProviders = RouterModule.forRoot(appRoutes);