import { Component } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import { UserformdialogComponent } from 'src/app/userformdialog/userformdialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
constructor(public dialog: MatDialog) {}



  userDialog(){
    this.dialog.open(UserformdialogComponent, {
      width: '35%',
    });
  }

}
