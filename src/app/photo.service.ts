import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  getRandomPic() {
    return this.http.get("https://api.unsplash.com/photos/random", {
      headers: {
        Authorization: "Client-ID aJzHhll9D4yewxpPuc23jhoDD5AyTU2oFytVAb8WIvA",
      },
    });
  }
}
