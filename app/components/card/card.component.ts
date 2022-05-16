import { Component, Input, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() item: any;
  constructor(private fires: FirebaseService) {}
  deleteNote(event: any) {
    this.fires.deleteNotes(event);
  }

  deleteTrash(id: string) {
    this.fires.deleteTrashNotes(id);
  }

  backNote(event: any) {
    this.fires.restoreNote(event);
  }

  pinNote(event: any) {
    this.fires.editNote(event);
  }

  ngOnInit(): void {}
}
