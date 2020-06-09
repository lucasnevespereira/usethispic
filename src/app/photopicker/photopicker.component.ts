import { Component, OnInit } from "@angular/core";
import { PhotoService } from "../photo.service";

@Component({
  selector: "app-photopicker",
  templateUrl: "./photopicker.component.html",
  styleUrls: ["./photopicker.component.css"],
})
export class PhotopickerComponent implements OnInit {
  constructor(private photoService: PhotoService) {
    this.photoService.getRandomPic().subscribe(() => {});
  }

  ngOnInit(): void {}
}
