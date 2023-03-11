import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Empty dishwasher'];
   finishedChores = ['Complete LaunchCode prep work', 'Buy groceries', 'call mom', 'Do all the things'];

   targetImage = 'https://imgs.search.brave.com/wlw7SZfgwq_Lxpkal_KEdce7odJaOI5l6REsvcvtaVo/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jbGlw/YXJ0NHNjaG9vbC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTgvMDcvc3BhY2Ut/cm9ja2V0LWNsaXBh/cnQtcHJldmlldy5q/cGc';

   constructor() { }

   ngOnInit() {
   }

}
