import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Materials
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, NativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// Material Navigation
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
// Material Layout
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
// Material Buttons & Indicators
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
// Material Popups & Modals
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
// Material Data tables
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ApplicantsComponent } from './modules/applicants/applicants-overview/applicants.component';

import { HttpClientModule } from '@angular/common/http';
import { GreetingComponent } from './modules/greeting/greeting.component';
import { EmployeesComponent } from './modules/employees/employees-overview/employees.component';
import { EmployeeDetailsComponent } from './modules/employees/employee-details/employee-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageWrapperComponent } from './core/components/page-wrapper/page-wrapper.component';
import { EmployeeWorkingsComponent } from './modules/employees/employee-workings/employee-workings.component.';
import { SpecialityComponent } from './modules/speciality/speciality-overview/specialities.component';
import { SpecialityDetailsComponent } from './modules/speciality/speciality-details/speciality-details.component';
import { PageHeaderComponent } from './core/components/page-header/page-header/page-header.component';
import { SpecialityCoefficientsComponent } from './modules/speciality/speciality-coefficients/speciality-coefficients.component';
import { CommonModule, DatePipe } from '@angular/common';
import { CompetitiveScoreComponent } from './modules/speciality/speciality-competitive-score/speciality-competitive-score.component';
import { LoginComponent } from './core/components/login/login.component';
import { LogoutComponent } from './core/components/logout/logout.component';
import { SpecialityStatisticComponent } from './modules/speciality/speciality-statistics/speciality-statistic.component';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { DynamicFilterComponent } from './core/components/dynamic-filter/dynamic-filter.component';
import { EmployeesModule } from './modules/employees/employees.module';
import { ApplicantsModule } from './modules/applicants/applicants.module';
import { SpecialityModule } from './modules/speciality/speciality.module';
import { NotFoundComponent } from './core/components/error-pages/not-found/not-found.component';
import { InternalServerComponent } from './core/components/error-pages/internal-server/internal-server.component';
import { JwtModule } from '@auth0/angular-jwt';
import { JWT } from './core/constans/auth';

export function tokenGetter() {
  return localStorage.getItem(JWT);
}

@NgModule({
  declarations: [
    AppComponent,
    ApplicantsComponent,
    GreetingComponent,
    EmployeesComponent,
    EmployeeDetailsComponent,
    PageWrapperComponent,
    EmployeeWorkingsComponent,
    SpecialityComponent,
    SpecialityDetailsComponent,
    PageHeaderComponent,
    SpecialityCoefficientsComponent,
    CompetitiveScoreComponent,
    LoginComponent,
    LogoutComponent,
    SpecialityStatisticComponent,
    DynamicFilterComponent,
    NotFoundComponent,
    InternalServerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:7151'],
        disallowedRoutes: [],
      },
    }),

    HttpClientModule,
    FormsModule,
    CommonModule,

    // Angular materials
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatMomentDateModule,
    EmployeesModule,
    ApplicantsModule,
    SpecialityModule,
  ],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // To tell Angular that we're going to use custom html inside our app
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
