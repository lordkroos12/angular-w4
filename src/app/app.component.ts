import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrafficLightComponent } from "./traffic-light/traffic-light.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, TrafficLightComponent]
})
export class AppComponent {
alarm() {
    this.emergency = true;
    this.cooldown = true;
    console.log('dsada');
    new Promise((resolve) => {
      setTimeout(() => resolve(""), 10000)
    })
    .then(() => {
      this.emergency = false;
      this.cooldown = true;
    
      return new Promise((resolve => {
        setTimeout(() => resolve(""), 10000)
      }))
    })
    .then(() => this.cooldown = false)
}

  cooldown: boolean = false;
  green = 'green';
  red = 'red';
  horizontal = 'horizontal';
  vertical = 'vertical';
  emergency:boolean = false;

  
}
