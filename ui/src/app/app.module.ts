import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AgmCoreModule } from '@agm/core';
import { from } from 'rxjs';
import {GmapComponent} from './gmap/gmap.component';
import { CommonService} from './services/common.service';

const routes: Routes = [
  { path: '', redirectTo: 'loginpage', pathMatch: 'full' },
  { path: 'loginpage', component: LoginComponent, },
  { path: 'registration', component: RegistrationComponent, },
  {
    path: 'contentpage', component: ContentComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    LoginComponent,
    RegistrationComponent,
    GmapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,
    RouterModule.forRoot(routes), RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyCP4n2L3QKYzBU7p6vZEfdoyfvr71DWgQw'
    })
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
