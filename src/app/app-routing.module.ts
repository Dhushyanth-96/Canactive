import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { AuthgaurdGuard } from './service/authgaurd.guard';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'patientlist',component:PatientListComponent,canActivate:[AuthgaurdGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
