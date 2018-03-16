import {Routes} from "@angular/router";
import {MemberDashboardComponent} from "./member-dashboard.component";
import {ContactComponent} from "../contact/contact.component";
import {AboutComponent} from "../about/about.component";

export const memberRoutes: Routes = [
  { path: '', component: MemberDashboardComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'about', component: AboutComponent},
];