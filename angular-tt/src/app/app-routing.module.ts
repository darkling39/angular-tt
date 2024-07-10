import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';
import { AddNewComponent } from './components/add-new/add-new.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'list', component: ListComponent},
  {path: 'edit', component: EditComponent},
  {path: 'add-new', component: AddNewComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: '**', redirectTo: 'not-found', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
