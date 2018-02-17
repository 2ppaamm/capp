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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminCourseCreateComponent } from './admin/admin-course-create/admin-course-create.component';
import { AdminCourseEditComponent } from './admin/admin-course-edit/admin-course-edit.component';
import { AdminCourseDeleteComponent } from './admin/admin-course-delete/admin-course-delete.component';
import { AdminUserCreateComponent } from './admin/admin-user-create/admin-user-create.component';
import { UserService } from './services/user.service';
import { AdminUserListComponent } from './admin/admin-user-list/admin-user-list.component';
import { AuthService } from './services/auth.service';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuardService } from './services/auth-guard.service';
import { LandingComponent } from './landing/landing.component';
import { HomenavComponent } from './dashboard/homenav.component';
import { MemberComponent } from './member/member.component';
import { HouseComponent } from './member/house/house.component';
import { FooterComponent } from './footer.component';


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
    AdminCourseCreateComponent,
    AdminCourseEditComponent,
    AdminCourseDeleteComponent,
    AdminUserCreateComponent,
    AdminUserListComponent,
    LandingComponent,
    HomenavComponent,
    MemberComponent,
    HouseComponent,
    FooterComponent
  ],
  imports: [
    routes,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CourseService, DashboardService, UserService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }