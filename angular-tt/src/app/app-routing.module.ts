import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';
import { AddNewComponent } from './components/add-new/add-new.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { authGuard } from './guards/auth.guard';
import { taskResolver } from './resolvers/task.resolver';
import { usernameResolver } from './resolvers/username.resolver';
import { adminGuard } from './guards/admin.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'list', component: ListComponent, canActivate:[authGuard]},
  {path: 'edit/:id', component: EditComponent, canActivate:[authGuard], resolve:{task: taskResolver}},
  {path: 'add-new', component: AddNewComponent, canActivate:[authGuard, adminGuard]},
  {path: 'not-found', component: NotFoundComponent},
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: '**', redirectTo: 'not-found', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
