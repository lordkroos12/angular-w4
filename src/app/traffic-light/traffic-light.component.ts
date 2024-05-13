import { sequence } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { IfStmt } from '@angular/compiler';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-traffic-light',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './traffic-light.component.html',
  styleUrl: './traffic-light.component.css'
})

export class TrafficLightComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    if (this.emergency) {
      console.log("change");
      this.emergencyFunction();
    }
    
  }
  cross(color: string) {
    console.log(color);
    if (color == "yellow") {
      alert("You receieve 50$ fine!");
    }
  }
  ngOnInit(): void {
    this.startTrafficLight();
  }
  @Input() layout = 'vertical';
  @Input() startColor: string = 'red';
  @Input() position: string = '';
  @Input() emergency: boolean = false;
  public intervalId: any;
  public timeoutId: any;
  public lightColor: string = this.startColor;

  startTrafficLight() {
    this.lightColor = this.startColor;
    this.intervalId = setInterval(() => {
      switch (this.lightColor) {
        case 'red':
          this.lightColor = 'yellow';
          this.timeoutId = setTimeout(() => {
            this.lightColor = 'green';
          }, 2000);
          break;
        case 'green':
          this.lightColor = 'yellow';
          this.timeoutId = setTimeout(() => {
            this.lightColor = 'red';
          }, 2000);
          break;
      }
    }, 7000);
  }
  emergencyFunction() {
    this.lightColor = "yellow";
    clearInterval(this.intervalId);
    clearInterval(this.timeoutId);
    new Promise((resolve) => {
      setInterval(() => {
        resolve("");

      }, 10000)
    })
      .then(() => {
        this.startTrafficLight();
      })


  }
}
