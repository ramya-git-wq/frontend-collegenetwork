import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginsPageComponent } from './components/logins-page/logins-page.component';
import { PlacementOfficerLoginComponent } from './components/placement-officer-login/placement-officer-login.component';
import { StaffLoginComponent } from './components/staff-login/staff-login.component';
import { StudentLoginComponent } from './components/student-login/student-login.component';
import { StudentResistrationComponent } from './components/student-resistration/student-resistration.component';

import  {EnterMarksComponent} from './enter-marks/enter-marks.component';

import { UpdateMarksComponent} from  './update-marks/update-marks.component';
import { CreateListComponent} from './create-list/create-list.component';
import  {LogOutComponent} from './log-out/log-out.component';
import { FinalComponent } from './components/homepage/final/final.component';
import { FacultyComponent } from './faculty/faculty.component';
import { RegistrationComponent } from './registration/registration.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { IndexComponent } from './post/index/index.component';
import { ViewComponent } from './post/view/view.component';
import { EditComponent } from './post/edit/edit.component';
import { CreateComponent } from './post/create/create.component';
import { FacultyPostUploadComponent } from './faculty-post-upload/faculty-post-upload.component';

const routes: Routes = [
  { path: 'faculty-post-upload', component: FacultyPostUploadComponent},
  {path : 'homepage', component:HomepageComponent},
  {path : '',component:LoginsPageComponent},
  {path : 'admin-login',component:AdminLoginComponent},
  {path : 'student-login',component:StudentLoginComponent},
  {path : 'student-dashboard',component:StudentDashboardComponent},
  {path : 'staff-login',component:StaffLoginComponent},
  {path : 'placement-officer-login',component:PlacementOfficerLoginComponent},
  {path : 'student-resistration',component:StudentResistrationComponent},
  {path : 'faculty',component: FacultyComponent},
  {path : 'admin',component:AdminComponent},
  { path: 'EnterMarks', component: EnterMarksComponent },
  {path:'Final',component:FinalComponent},

{ path: 'UpdateMarks', component: UpdateMarksComponent },

{ path: 'CreateList', component: CreateListComponent  },

{ path: 'LogOut', component: LogOutComponent },


{ path: 'faculty', component: FacultyComponent },
{ path: 'registration', component: RegistrationComponent  },
{ path: 'post', redirectTo: 'post/index', pathMatch: 'full'},
{ path: 'post/index', component: IndexComponent },
{ path: 'post/:postId/view', component: ViewComponent },
{ path: 'post/create', component: CreateComponent },
{ path: 'post/:postId/edit', component: EditComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  export const routingComponents=[EnterMarksComponent,UpdateMarksComponent,CreateListComponent,LogOutComponent]


