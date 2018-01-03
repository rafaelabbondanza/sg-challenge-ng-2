import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleTrackerService } from './article-tracker.service';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { NotImplementedComponent } from './not-implemented/not-implemented.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    NotImplementedComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ArticleTrackerService],
  bootstrap: [AppComponent]
})

export class AppModule { }
