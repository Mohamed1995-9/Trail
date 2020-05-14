import { Component, OnInit, HostListener, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material";
import { NgFlashMessageService } from "ng-flash-messages";

import { TranslateService } from "@ngx-translate/core";
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  @ViewChild("sidenav") sidenav: MatSidenav;

  admin = {
    full_name: "Admin",
    role: "Admin",
    image: "../../../assets/Images/admin.png",
  };

  // notifications_num = 5;

  isMenuOpen;
  contentMargin = 240;
  currentLanguage: string;

  // task: string[] = [
  //   'Clearning out my closet', 'Take out trash bins', 'Wash car', 'Tank up the motorcycles', 'Go for flight training'
  // ]

  constructor(
    private jwtHelper: JwtHelperService,
    private ngFlashMessageService: NgFlashMessageService,
    public translate: TranslateService
  ) {
    if (localStorage.getItem("current_language") != null) {
      translate.use(localStorage.getItem("current_language"));
    } else {
      this.translate.use("en");
    }
    this.currentLanguage = this.translate.currentLang;
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    this.currentLanguage = language;
    localStorage.setItem("current_language", language);
  }

  ngOnInit() {
    if (window.innerWidth < 500) {
      this.isMenuOpen = false;
      this.contentMargin = 70;
    }
    if (window.innerWidth > 500) {
      this.isMenuOpen = true;
      this.contentMargin = 240;
    }

    let token = localStorage.getItem("id_token");

    let decodedJwtData = this.jwtHelper.decodeToken(token);

    this.admin = {
      full_name: decodedJwtData.full_name,
      role: decodedJwtData.role,
      // image: decodedJwtData.avatar,
      image: "../../../assets/Images/admin.png",
    };
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    if (event.target.innerWidth < 500) {
      this.isMenuOpen = false;
      this.contentMargin = 70;
    }
    if (event.target.innerWidth > 500) {
      this.isMenuOpen = true;
      this.contentMargin = 240;
    }
  }

  onToolbarMenuToggle() {
    this.isMenuOpen = !this.isMenuOpen;

    if (!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }

  logout() {
    // this.authService.logout();
    this.ngFlashMessageService.showFlashMessage({
      messages: ["You are logged out"],
      timeout: 3500,
      type: "success",
    });

    // this.router.navigate([""]);
    return false;
  }
}
