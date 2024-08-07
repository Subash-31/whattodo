import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TaskCreationComponent } from './pages/task-creation/task-creation.component';
import { HistoryComponent } from './pages/history/history.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { TaskModificationComponent } from './pages/task-modification/task-modification.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { CategoryEmojiPipe } from './pipes/category-emoji.pipe';
import { FilterComponent } from './components/filter/filter.component';
import { LoginComponent } from './login/login.component';
import { LoginnewComponent } from './loginnew/loginnew.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SignupComponent } from './signup/signup.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NavbarComponent,
    TaskCreationComponent,
    HistoryComponent,
    NotFoundComponent,
    TaskModificationComponent,
    TaskFormComponent,
    CategoryEmojiPipe,
    FilterComponent,
    LoginComponent,
    LoginnewComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right'
    })


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
