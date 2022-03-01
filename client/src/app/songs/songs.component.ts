import { Component, OnDestroy, OnInit } from '@angular/core';
import { SongsService } from './songs.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit, OnDestroy {
  public artist: string;
  getSongSub: Subscription;
  public result;

  constructor(private songsService: SongsService) { }



  ngOnInit(): void {
    this.getSongs();


  }

  ngOnDestroy(): void {
    this.unsub();
  }
  unsub(): void {
    if (this.getSongSub) {
      this.getSongSub.unsubscribe();
    }
  }

  getSongs(){
    this.songsService.getSongs()
    .subscribe((result: any) => {

        this.result = result.response.songs[0].full_title;
        console.log(result);

    });

  }

}
