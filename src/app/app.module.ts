import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { appRoutes } from './routes'
import { FirstLetterToUppercasePipe } from './rccg/shared/first-letter-to-uppercase.pipe';

import { AppComponent } from './app.component';
import { NavbarComponent } from './rccg/navbar.component'
import { HomeComponent } from './rccg/home.component'
import { ContactUsComponent } from './rccg/contact-us.component'
import { AboutHymnComponent } from './rccg/about-hymn.component'
import { RccgComponent } from './rccg/rccg.component'
import { HymnThumbnailComponent } from './rccg/hymn/hymn-thumbnail.component'
import { HymnListComponent } from './rccg/hymn-list.component'
import { HymnDefaultViewComponent } from './rccg/hymn/hymn-default-view.component'
import { HymnCategoryViewComponent } from './rccg/hymn/hymn-category-view.component'
import { HymnComponent } from './rccg/hymn/hymn.component'
import { HymnChangeComponent } from './rccg/hymn/hymn-change.component'

@NgModule({
  declarations: [
    FirstLetterToUppercasePipe,

    AppComponent,
    HomeComponent,
    HymnThumbnailComponent,
    HymnListComponent,
    HymnDefaultViewComponent,
    HymnCategoryViewComponent,
    HymnComponent,
    AboutHymnComponent,
    ContactUsComponent,
    RccgComponent,
    NavbarComponent,
    HymnChangeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
