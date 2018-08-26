import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppMaterialModule } from './app.material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginProviderService } from './core/login-provider.service';
import { AuthGuard } from './core/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, 'training-app'),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AppMaterialModule,
  ],
  providers: [
    LoginProviderService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
