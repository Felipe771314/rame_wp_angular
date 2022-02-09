import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root",
})
export class WPAPIservice {
    endpoint = "http://felipevirasoro.com.ar/wp-json/wp/v2";
    constructor(private http: HttpClient) {}
    posts(query = null) {
     return this.http.get(`{this.endpoint}/posts?${query}`);
    }
}