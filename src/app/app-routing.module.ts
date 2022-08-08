import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DialogComponent } from './dialog/dialog.component';
import { HeaderComponent } from './header/header.component';
import { IconComponent } from './icon/icon.component';
import { MbadgeComponent } from './mbadge/mbadge.component';
import { TemplateComponent } from './template/template.component';
import { BindingComponent } from './binding/binding.component';
//import {MatBadgeModule} from '@angular/material/badge';

//import { MatsliderComponent } from './matslider/matslider.component';
//import { ProgressbarComponent } from './progressbar/progressbar.component';

const routes: Routes = [
  //{path: 'slider',component:MatsliderComponent},
  //{path: 'progress',component:ProgressbarComponent}
 // {path:'',redirectTo:'/header',pathMatch:''},
  {path:'mbadge',component:MbadgeComponent},
  {path:'header',component:HeaderComponent},
  {path:'dialog',component:DialogComponent},
  {path:'datepicker',component:DatepickerComponent},
  {path:'binding',component:BindingComponent},
{path:'icon',component:IconComponent},
{path:'template',component:TemplateComponent},
{path:'button',component:ButtonComponent}


  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
