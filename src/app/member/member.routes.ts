import {Routes} from "@angular/router";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {ContactComponent} from "../contact/contact.component";
import {AboutComponent} from "../about/about.component";

export const memberRoutes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'about', component: AboutComponent},
];