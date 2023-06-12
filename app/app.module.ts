import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MqttModule } from 'ngx-mqtt';

import { AppComponent } from './app.component';
import { MqttToastComponent } from './mqtt-toast.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MqttModule.forRoot({})],
  declarations: [AppComponent, MqttToastComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
