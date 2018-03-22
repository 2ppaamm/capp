import { Routes } from "@angular/router";
import { MemberDashboardComponent } from "./member-dashboard.component";
import { ContactComponent } from "../contact/contact.component";
import { AboutComponent } from "../about/about.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { TrackCreateComponent } from "./track-create/track-create.component";

export const memberRoutes: Routes = [
  { path: '', component: MemberDashboardComponent},
  { path: 'profile', component: UserProfileComponent},
  { path: 'tracks/create', component: TrackCreateComponent},
];