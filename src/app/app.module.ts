import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { ChartsModule } from 'ng2-charts';
import { ListComponent } from './components/task/list/list.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';

import { HttpClientModule } from '@angular/common/http';
import { TaskService } from './services/task.service';
import { NavigationComponent } from './navigation/navigation.component';
import { AddComponent } from './components/task/add/add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowComponent } from './components/task/show/show.component';
import { FormsModule } from '@angular/forms';
import { TaskFilterPipe } from './task-filter.pipe';
import { MatCheckboxModule } from '@angular/material/checkbox'






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    NavigationComponent,
    AddComponent,
    ShowComponent,
    TaskFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartsModule,
    MatListModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    HomeComponent,
    ChartsModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    NavigationComponent,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
