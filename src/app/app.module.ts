import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes, Router } from "@angular/router";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgFlashMessagesModule } from "ng-flash-messages";
import { JwtModule } from "@auth0/angular-jwt";
import {
  MatTooltipModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatSnackBarModule,
  MatMenuModule,
  MatTreeModule,
  MatDialogModule,
  MatDialogConfig,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatBadgeModule,
  MatGridListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressBarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  
} from "@angular/material";
import {AppRoutingModule , routingComponents} from './app-routing/app-routing.module'
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { AppComponent } from "./app.component";
import { LayoutModule } from "@angular/cdk/layout";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';




export function jwtTokenGetter() {
  return localStorage.getItem("id_token");
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "assets/i18n/", ".json");
}
// const appRoutes: routes = [
//   { path:'pages',component:ContactComponent }
// ]
@NgModule({
  declarations: [
    AppComponent,
        NavbarComponent,
    DashboardComponent,
    BodyComponent,
    routingComponents,
    FooterComponent,
    AboutComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    // Router,
    // RouterModule.forRoot(appRoutes),
    NgFlashMessagesModule.forRoot(),

    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter,
      },
    }),

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),

    MatInputModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatMenuModule,
    MatTooltipModule,
    MatTreeModule,
    MatDialogModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatBadgeModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    LayoutModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    MatDatepickerModule,
  ],
  bootstrap: [AppComponent],
  // entryComponents: [ViewRequestComponent, RequestActionComponent],
})
export class AppModule {}
