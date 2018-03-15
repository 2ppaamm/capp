import {Routes, RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LandingComponent} from "./landing/landing.component";
import {ContactComponent} from "./contact/contact.component";
import {AboutComponent} from "./about/about.component";
import {ModuleWithProviders} from "@angular/core";
import {AdminComponent} from './admin/admin.component';
import {adminRoutes} from './admin/admin.routes';
import {AuthGuardService} from './services/auth-guard.service';
import {MemberComponent} from './member/member.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';


const appRoutes: Routes = [
  { path: '', redirectTo:'/', pathMatch: 'full'},
  { path: '', component: DashboardComponent},
  { path: 'leader', component: LeaderboardComponent},
  { path: 'about', component: AboutComponent},
  { path: 'admin', component: AdminComponent, children: adminRoutes}
];

export const routes:ModuleWithProviders = RouterModule.forRoot(appRoutes);