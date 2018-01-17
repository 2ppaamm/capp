import {Routes} from "@angular/router";
import {AdminCourseListComponent} from "./admin-course-list/admin-course-list.component";
import {AdminDashboardComponent} from "./admin-dashboard.component";
import {AdminCourseCreateComponent} from "./admin-course-create/admin-course-create.component";

export const adminRoutes: Routes = [
  { path: '', component: AdminDashboardComponent},
  { path: 'courses', component: AdminCourseListComponent},
  { path: 'courses/create', component: AdminCourseCreateComponent}

];