import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  private blog: string;
  private location: string;
  private sumate: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://api.github.com/users/Laboratoria')
      .map( (res: any) => {
        res.sumate = res.email;
        return res;
      })
      .subscribe(
        (res: IResponse) => {
          this.blog = res.blog;
          this.location = res.location;
          this.sumate = res.sumate;
        }
      );
  }
}

interface IResponse {
  blog: string;
  location: string;
  sumate: string;
}
