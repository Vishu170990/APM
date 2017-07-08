import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ProductListComponent} from './product/product-list.component';
import { AppComponent }  from './app.component';
import {FormsModule} from '@angular/forms'
import { ProductListPipe } from "./product/product-filter.pipe";

@NgModule({
  imports: [ BrowserModule,
  FormsModule ],
  declarations: [ ProductListComponent,
  AppComponent,ProductListPipe ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
