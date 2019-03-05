import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HistoryComponent } from './history/history.component';
import { AnswersComponent } from './answers/answers.component';
import { HeaderComponent } from './header/header.component';
import { CollapseComponent } from './collapse/collapse.component';
import { MembersComponent } from './members/members.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    GalleryComponent,
    HistoryComponent,
    AnswersComponent,
    HeaderComponent,
    CollapseComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '' , component: HomeComponent },
      { path: 'answers' , component: AnswersComponent },
      { path: 'history' , component: HistoryComponent },
      { path: 'members' , component: MembersComponent },
      { path: 'gallery' , component: GalleryComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
