import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CommonService {
  constructor(private http: HttpClient) {}

  getCountryList() {
    return this.http.get("http://localhost:4300/api/countries");
  }

  doLogin(userDetails) {
    let payload = { email: userDetails.email, password: userDetails.password };
    return this.http.post("http://localhost:4300/api/login", payload);
  }

  doRegister(userDetails) {
    // let payload = {
    //   username: "siva",
    //   password: "asd123",
    //   email: "siva@gmail.com",
    //   mobile: "012345678"
    // };
    console.log(userDetails);
    return this.http.post("http://localhost:4300/api/signup", userDetails);
  }
}
