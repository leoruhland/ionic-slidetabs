import { Observable } from 'rxjs';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Slidetabs } from './components/slidetabs';

@NgModule({
  declarations: [
    Slidetabs
  ],
  providers: [  ],
  exports: [
    Slidetabs
  ],
  imports: [
    BrowserModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SlidetabsModule {}
