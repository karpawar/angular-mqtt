import { Component } from '@angular/core';
import { MqttService, IMqttMessage } from 'ngx-mqtt';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mqtt-toast',
  template: '',
})
export class MqttToastComponent {
  constructor(private mqttService: MqttService, private toastr: ToastrService) {
    this.connectToMqttBroker();
  }

  connectToMqttBroker() {
    this.mqttService.connect({ hostname: '1.1.1.1', port: 11883 }).subscribe({
      next: () => {
        console.log('Connected to MQTT broker');

        // Subscribe to the topic
        this.mqttService
          .observe('PIONEER/RP00')
          .subscribe((message: IMqttMessage) => {
            // Handle received message
            this.handleMqttMessage(message);
          });
      },
      error: (error: any) => {
        console.error('Could not connect to MQTT broker', error);
      },
    });
  }

  handleMqttMessage(message: IMqttMessage) {
    const payload = message.payload.toString();
    console.log('Received MQTT message:', payload);

    // Show toast notification
    this.toastr.success('New MQTT Message', payload);
  }
}
