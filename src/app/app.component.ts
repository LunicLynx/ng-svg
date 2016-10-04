import { Component, OnInit } from '@angular/core';


@Component({
  selector: '[eco-block]',
  template: `
<svg:rect width="300" height="200" style="fill:rgb(0,0,255)"
[style.fill]="color"
 (mousemove)="mousemove($event)" />
`
})
export class BlockComponent implements OnInit {
  color: string;

  constructor() { }

  mousemove(e: MouseEvent) {
    this.color = 'rgb(' + (e.clientY % 256) + ',' + ((e.clientX + e.clientY) % 256) + ',' + (e.clientX % 256) + ')';
  }

  ngOnInit() { }
}

@Component({
  selector: 'eco-canvas',
  template: `
  <svg viewBox="0 0 900 500">
  <svg:g eco-block />
  </svg>
  `
})
export class CanvasComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}




@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
}




