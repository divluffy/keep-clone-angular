import { Component, Input, OnInit } from '@angular/core';
import { AsideService } from 'src/app/services/aside.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent implements OnInit {
  isSection: string = 'notes';
  @Input() isSideSmall: boolean = false;

  constructor(public section: AsideService) {
    console.log(section.Data);
  }

  ngOnInit(): void {}
}
