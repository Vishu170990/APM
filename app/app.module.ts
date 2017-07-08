import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ProductListComponent} from './product/product-list.component';
import { AppComponent }  from './app.component';
import {FormsModule} from '@angular/forms'

@NgModule({
  imports: [ BrowserModule,
  FormsModule ],
  declarations: [ ProductListComponent,
  AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
