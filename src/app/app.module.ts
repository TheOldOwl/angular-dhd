import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroSliderComponent } from './dhd-home/hero-slider/hero-slider.component';
import { ServicenowComponent } from './dhd-home/servicenow/servicenow.component';
import { CustomersComponent } from './dhd-home/customers/customers.component';
import { from } from 'rxjs';
import { ContactFormComponent } from './dhd-home/contact-form/contact-form.component';
import { DhdFooterComponent } from './dhd-footer/dhd-footer.component';
import { ServicenowPageComponent } from './servicenow-page/servicenow-page.component';
import { DhdHomeComponent } from './dhd-home/dhd-home.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { DhdBlogComponent } from './dhd-blog/dhd-blog.component';
import { DhdArticleComponent } from './dhd-blog/dhd-article-list/dhd-article/dhd-article.component';
import { DhdArticleListComponent } from './dhd-blog/dhd-article-list/dhd-article-list.component';
import { ArticlePageComponent } from './dhd-blog/article-page/article-page.component';

import { DhdArticleService } from './dhd-blog/dhd-article.service'
import { DropdownDirective } from './shared/dropdown.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MaterialModule } from './material/material.model';
import { OurApproachComponent } from './dhd-home/our-approach/our-approach.component'
import { DhdRouteService } from './routing.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PrivacyPolicyComponent } from './terms-conditions/privacy-policy/privacy-policy.component';
import { DhdServicesComponent } from './dhd-services/dhd-services.component';

const appRoutes: Routes = [
  { path: '', component: DhdHomeComponent },
  { path: 'servicenow', component: ServicenowPageComponent },
  { path: 'services', component: DhdServicesComponent },
  { path: 'terms-and-conditions', component: TermsConditionsComponent },
  { path: 'blog', component: DhdBlogComponent },
  { path: 'blog/:id', component: ArticlePageComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroSliderComponent,
    ServicenowComponent,
    CustomersComponent,
    ContactFormComponent,
    DhdFooterComponent,
    ServicenowPageComponent,
    DhdHomeComponent,
    TermsConditionsComponent,
    DhdBlogComponent,
    DhdArticleComponent,
    DhdArticleListComponent,
    ArticlePageComponent,
    DropdownDirective,
    OurApproachComponent,
    PrivacyPolicyComponent,
    DhdServicesComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'}),
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule,
  ],
  providers: [DhdArticleService, DhdRouteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
