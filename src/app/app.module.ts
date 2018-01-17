import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseListComponent } from './dashboard/course-list/course-list.component';
import { CourseComponent } from './dashboard/course-list/course.component';
import { CourseService } from './services/course.service';
import { DashboardService } from './services/dashboard.service';
import { CourseDetailComponent } from './dashboard/course-detail/course-detail.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { routes } from './app.routes';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin/admin-dashboard.component';
import { AdminCourseListComponent } from './admin/admin-course-list/admin-course-list.component';
import { FormsModule } from '@angular/forms';
import { AdminCourseCreateComponent } from './admin/admin-course-create/admin-course-create.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    CourseListComponent,
    CourseComponent,
    CourseDetailComponent,
    ContactComponent,
    AboutComponent,
    AdminComponent,
    AdminDashboardComponent,
    AdminCourseListComponent,
    AdminCourseCreateComponent
  ],
  imports: [
    routes,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CourseService, DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
