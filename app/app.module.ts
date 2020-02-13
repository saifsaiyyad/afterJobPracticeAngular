import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import 'hammerjs';
import { componentOne } from './componentOne/component.one';
import { HttpClientModule } from '@angular/common/http';
import { serviceOne } from './service/service.one';
import { componentTwo } from './componentTwo/component.two';
import { attrDir } from './Directive/AttrDir';
import { structureDir } from './Directive/structDir';
import { RouterModule } from '@angular/router';
import {newRoutes} from "../app/routing/enableRouting"
import { Componenthree } from './routing/page3/page3';
import { Componenfour } from './routing/page4/page4';
import { Componenfive } from './routing/page5/page5';
import { communicationTwo } from './ViewChaildandViewChildern/compTwo/com.two';
import { CommunicationcomponentOne } from './ViewChaildandViewChildern/compOne/com.one';
import { componentThreeViewChildren } from './ViewChaildandViewChildern/ComThree/com.three';


@NgModule({
  declarations: [
    AppComponent,
    componentOne,
    componentTwo,
    attrDir,
    structureDir,Componenthree,Componenfour,
    Componenfive,
    CommunicationcomponentOne,
    communicationTwo,
    componentThreeViewChildren
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    HttpClientModule,
    RouterModule.forRoot(newRoutes)
  ],
  providers: [serviceOne],
  bootstrap: [AppComponent]
})
export class AppModule { }
