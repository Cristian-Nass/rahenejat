import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor() { }
  members: any[] = [
    {
      id: 1,
      name: 'کریستین',
      text1: 'تعمید : ۲۷ می ۲۰۱۸',
      text2: 'واقعا خوشحالم که عیسی مسیح رو به عنوان ناجی و خدای خودم پذیرفتم ،',
      text3: 'مسیحیت دین نیست ، مسیحیت راه نجات و رستگاری است .',
      img: 'assets/members/cristian.png'
    },
    {
      id: 2,
      name: 'مهدی خدایی',
      text1: 'تعمید : ۸ جولای ۲۰۱۸',
      text2: 'تنها راه شناخت خداوند و رسیدن به رستگاری کامل راه مسیحیت است . ',
      text3: 'خداوندی که گناهان ما را به خود گرفت و جانش را برای رستگاری ما فدا کرد .',
      img: 'assets/members/mehdilogo.png'
    }
];
  ngOnInit() {
  }

}
