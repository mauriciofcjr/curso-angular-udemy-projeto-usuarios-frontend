import { Routes } from '@angular/router';
import { UserInfosComponent } from './components/user-infos/user-infos.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'user-infos',
        component: UserInfosComponent,
    }
];
