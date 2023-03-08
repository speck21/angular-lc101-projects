import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo/Image Section Title Here';
  image1 = 'https://imgs.search.brave.com/2EF90i95mAMnwYpK2zOXTFxdMNgYM-V97rGtar-ZTkg/rs:fit:592:612:1/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vdmVjdG9y/cy9jYXJ0b29uLWFy/Y2hlcnktdGFyZ2V0/LXZlY3Rvci1pZDE0/ODc3MTczOT9rPTYm/bT0xNDg3NzE3Mzkm/cz02MTJ4NjEyJnc9/MCZoPWdFc2h5dlVq/OGRqRXpORGFPejNt/Vks5VDRqSXNROUJ1/ZWh2eFFiU2hndEE9';
  image2 = 'https://imgs.search.brave.com/8_7Ozj0gstDXoV6O18WfZut9pfc892EntinFg1_9drY/rs:fit:1000:1200:1/g:ce/aHR0cHM6Ly9waWNm/aWxlcy5hbHBoYWNv/ZGVycy5jb20vMTQw/LzE0MDEwMy5qcGc';
  image3 = 'https://imgs.search.brave.com/cZxqKBxoeB6RFhy7i-vZbrpQNPvZGrezIfZEq2vVkzs/rs:fit:1200:1200:1/g:ce/aHR0cDovL25hdGlv/bmFsaW50ZXJlc3Qu/b3JnL3NpdGVzL2Rl/ZmF1bHQvZmlsZXMv/bWFpbl9pbWFnZXMv/c3dlZ2Rlc2dzZGdk/Zi5KUEVH';

  constructor() { }

  ngOnInit() {
  }

}