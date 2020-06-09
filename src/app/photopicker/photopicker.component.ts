import { Component, OnInit } from "@angular/core";
import { PhotoService } from "../photo.service";

@Component({
  selector: "app-photopicker",
  templateUrl: "./photopicker.component.html",
  styleUrls: ["./photopicker.component.css"],
})
export class PhotopickerComponent implements OnInit {
  randomPic: string;
  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.fetchPhoto();
  }

  onClick() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.photoService.getRandomPic().subscribe((response) => {
      this.randomPic = response.urls.regular;

      // Approach with pluck operator
      // this.randomPic = response;
      
    });
  }
}
