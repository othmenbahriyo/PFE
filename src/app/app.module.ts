import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PresentationComponent } from './presentation/presentation.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { RegisterComponent } from './register/register.component';
import { MapComponent } from './map/map.component';
import { ReservationComponent } from './reservation/reservation.component';
import { PriceComponent } from './price/price.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { IgxTimePickerModule } from 'igniteui-angular';
import { LoginComponent } from './login/login.component';
import { PaimentComponent } from './paiment/paiment.component';
import { GestionComponent } from './gestion/gestion.component';
import { AdminComponent } from './admin/admin.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatBoardComponent } from './mat-board/mat-board.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { GparkComponent } from './gpark/gpark.component';
import { GmapsComponent } from './gmaps/gmaps.component';
import { TableauComponent } from './tableau/tableau.component';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxStripeModule } from 'ngx-stripe';
import {  ReactiveFormsModule } from '@angular/forms';
import { NgxPayPalModule } from 'ngx-paypal';
import { MatDialogModule } from '@angular/material/dialog';
import { MyDialogComponent } from './my-dialog/my-dialog.component';






@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    NavbarComponent,
    RegisterComponent,
    MapComponent,
    ReservationComponent,
    PriceComponent,
    ContactComponent,
    LoginComponent,
    PaimentComponent,
    GestionComponent,
    AdminComponent,
    MatBoardComponent,
    GparkComponent,
    GmapsComponent,
    TableauComponent,
    MyDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPayPalModule,
    AppRoutingModule,
    ChartsModule,
    NgxMaterialTimepickerModule,
    IgxTimePickerModule,
    MatSliderModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAC_TOUb7r8JDCmM_kcd0f-vHW_mQC_X7Q'
    }),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    NgxStripeModule.forRoot('pk_test_qpj9EFKeYbrkjiasiPfWlHtC00MEUchuHM')
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
