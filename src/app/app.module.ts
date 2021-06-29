import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppProvidersModule } from './providers/app-providers.module';
import { SnackbarProviderModule } from './providers/snackbar-provider/snackbar-provider.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreConfigModule } from './store/store-config.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppProvidersModule,
    SnackbarProviderModule,
    HttpClientModule,
    StoreConfigModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
