import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  isFocus: boolean = false;
  isOpen: boolean = false;
  @Output() isMenuopen = new EventEmitter();

  onFocus() {
    this.isFocus = !this.isFocus;
  }

  onMenu() {
    this.isOpen = !this.isOpen;
    this.isMenuopen.emit(this.isOpen);
  }

  constructor(public store: LoaderService) {}

  ngOnInit(): void {}
}
