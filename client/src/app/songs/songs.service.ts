import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor(private http: HttpClient) { }

  getSongs(){
    return this.http.get
    ('https://api.genius.com/artists/16775/songs?access_token=wlLW8MuylkDYq3DHKL5JIo-5LyGrl7Y0ZcKE3mUfAUPUguODIS1JzJ9KKx8YsaQh');
  }
}
