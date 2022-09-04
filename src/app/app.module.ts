import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginsPageComponent } from './components/logins-page/logins-page.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { StudentLoginComponent } from './components/student-login/student-login.component';
import { StaffLoginComponent } from './components/staff-login/staff-login.component';
import { PlacementOfficerLoginComponent } from './components/placement-officer-login/placement-officer-login.component';
import { StudentResistrationComponent } from './components/student-resistration/student-resistration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AdminComponent } from './components/admin/admin.component';
import { CreateListComponent } from './create-list/create-list.component';
import { EnterMarksComponent } from './enter-marks/enter-marks.component';
import { UpdateMarksComponent } from './update-marks/update-marks.component';
import { LogOutComponent } from './log-out/log-out.component';
import { FinalComponent } from './components/homepage/final/final.component';
import { FacultyComponent } from './faculty/faculty.component';
import { RegistrationComponent } from './registration/registration.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { PostModule } from './post/post.module';
import { HttpClientModule } from '@angular/common/http';
import {
  FontAwesomeModule,
  FaIconLibrary
} from "@fortawesome/angular-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FacultyPostUploadComponent } from './faculty-post-upload/faculty-post-upload.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginsPageComponent,
    AdminLoginComponent,
    StudentLoginComponent,
    StaffLoginComponent,
    PlacementOfficerLoginComponent,
    StudentResistrationComponent,
    
    AdminComponent,
    CreateListComponent,
    EnterMarksComponent,
    UpdateMarksComponent,
    LogOutComponent,
    FinalComponent,
    FacultyComponent,
    RegistrationComponent,
    StudentDashboardComponent,
    FacultyPostUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    PostModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private library: FaIconLibrary) {
    library.addIcons(faUpload);
  }

 }
