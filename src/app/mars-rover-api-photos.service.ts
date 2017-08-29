import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { marsRoverKey } from './api-keys';
import { Photo } from './photo.model';
import { PhotoService} from './photo.service';

@Injectable()
export class MarsRoverApiPhotosService {

  constructor(private http: Http, private photoService: PhotoService) { }


  getByDateAndCamera(date: string, camera: string) {
    return this.http.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2017-01-01&camera=mast&api_key=YFcL2M7cMBQ8j1VRQTyCO1ejj1SDqgY3k2FJWdxc")
  }
  saveImages(date: string, camera: string) {
    return this.http.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" + date + "&camera=" + camera + "&api_key=" + marsRoverKey)
      .subscribe(response => {
        let foundPhoto: Photo;
        for(let image of response.json().photos) {
          foundPhoto = new Photo(image.img_src, camera, date);
          this.photoService.addPhoto(foundPhoto);
        }
      });
  }

}
