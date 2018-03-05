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
import { MemberComponent } from './member/member.component';
import { HouseComponent } from './member/house/house.component';
import { FooterComponent } from './footer.component';
import { HouseListComponent } from './member/house-list/house-list.component';
import { HouseDetailComponent } from './member/house-detail/house-detail.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { TeachListComponent } from './member/teach-list/teach-list.component';
import { TeachComponent } from './member/teach-list/teach.component';
import { TeachDetailComponent } from './member/teach-list/teach-detail/teach-detail.component';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './member/teach-list/teach-detail/chart/chart.component';
import { BarchartComponent } from './member/teach-list/teach-detail/barchart/barchart.component';
import { StudentradarComponent } from './member/house-detail/studentradar/studentradar.component';
import { UserinfoComponent } from './member/userinfo/userinfo.component';
import { VideoComponent } from './member/video/video.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

export function tokenGetter() {
    return localStorage.getItem("token");
}

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
    MemberComponent,
    HouseComponent,
    FooterComponent,
    HouseListComponent,
    HouseDetailComponent,
    DropdownDirective,
    TeachListComponent,
    TeachComponent,
    TeachDetailComponent,
    ChartComponent,
    BarchartComponent,
    StudentradarComponent,
    UserinfoComponent,
    VideoComponent,
    LeaderboardComponent
  ],
  imports: [
    routes,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:4200', 'localhost', 'api.pamelalim.me', 'math.pamelalim.me']
      }
    })
  ],
  providers: [CourseService, DashboardService, UserService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})

export class AppModule { }