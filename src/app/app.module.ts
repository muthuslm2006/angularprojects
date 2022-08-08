import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MbadgeComponent } from './mbadge/mbadge.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DatepickerComponent } from './datepicker/datepicker.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';
import { TemplateComponent } from './template/template.component';
import { DataService } from './data.service';
import { BindingComponent } from './binding/binding.component';
//import { MatSliderModule } from '@angular/material/slider';
//import { MatsliderComponent } from './matslider/matslider.component';
//import {MatSliderModule} from '@angular/material/slider';
//import { ProgressbarComponent } from './progressbar/progressbar.component';


@NgModule({
  declarations: [
    AppComponent,
    MbadgeComponent,
    HeaderComponent,
    DialogComponent,
    DatepickerComponent,
    ButtonComponent,
    IconComponent,
    TemplateComponent,
    BindingComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatToolbarModule
    
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
