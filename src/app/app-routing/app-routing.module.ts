import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AuthGuard } from '../core/auth-guard.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';


const routes: Route[] = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
