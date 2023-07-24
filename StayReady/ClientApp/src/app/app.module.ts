import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { NavbarComponent } from './components/navbar-menu/navbar/navbar.component';
import { LogoComponent } from './components/navbar-menu/logo/logo.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { ContainerComponent } from './components/navbar-menu/container/container.component';
import { SearchComponent } from './components/navbar-menu/search/search.component';
import { UserMenuComponent } from './components/navbar-menu/user-menu/user-menu.component';
import { CategoriesComponent } from './components/navbar-menu/categories/categories.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material/material.module';
import { MenuItemsComponent } from './components/navbar-menu/menu-items/menu-items.component';
import { PopupMenuComponent } from './components/navbar-menu/popup-menu/popup-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    NavbarComponent,
    LogoComponent,
    AvatarComponent,
    ContainerComponent,
    SearchComponent,
    UserMenuComponent,
    CategoriesComponent,
    MenuItemsComponent,
    PopupMenuComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
