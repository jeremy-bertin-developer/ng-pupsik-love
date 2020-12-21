import { DialogComponent } from './../dialog/dialog.component';
import { Phrase } from './../../core/util/models/phrase';
import { DataBase } from './../../core/util/data-base';
import { PhrasesService } from './../phrases.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  phrase: Phrase;
  actualDate: Date;
  color: string;

  constructor(private phrases: PhrasesService) {}

  ngOnInit(): void {
    this.actualDate = new Date();
    this.color = this.getBackgroundColor();
    this.phrases.getPhrases(DataBase.phrases).subscribe((x) => {
      for (const phraseDate of x) {
        if (this.actualDate.toLocaleDateString() === phraseDate.date) {
          this.phrase = phraseDate.phrase;
        }
      }
    });
  }

  getBackgroundColor(): string {
    const colours = ['#F765B8', '#f06836', '#562151', '#D7713B', '#FFE9CA', '#FB8987', '#FBB95D', '#A9FDFA', '#F83F49', '#E1D145'];
    const randomColour = colours[Math.floor(Math.random() * colours.length)];
    return randomColour;
  }
}
