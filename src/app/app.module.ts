import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DialogWindowComponent } from './views/dialog/dialog-window/dialog-window.component';
import { DialogComponent } from './views/dialog/dialog.component';
import { MainComponent } from './views/main/main.component';

@NgModule({
  declarations: [AppComponent, MainComponent, DialogComponent, DialogWindowComponent],
  imports: [BrowserModule, BrowserAnimationsModule, NoopAnimationsModule, MatSliderModule, MatDialogModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
