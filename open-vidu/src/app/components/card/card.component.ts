import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: any;
  @Output() enterEvent = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  enter(id: number) {
    this.enterEvent.emit(id);
  }
}
