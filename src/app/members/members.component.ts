import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor() { }
  members : any[] = [
    {id: 1, name: 'کریستین', text: 'در حال آماده سازی', img: 'assets/members/cristian.png'},
];
  ngOnInit() {
  }

}
