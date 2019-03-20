import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {

  userId: string;
  websites = [];
  constructor(private websiteService: WebsiteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.userId = params['uid'];
      }
    );
    this.websiteService.findWebsitesByUser(this.userId)
      .subscribe(
        (data: any) => {
          this.websites = data;
        }
      );
    console.log(this.websites);
  }

  newWebsite() {
    this.router.navigate(['/user', this.userId, 'website', 'new' ]);
  }

  list() {
    this.router.navigate(['/user', this.userId, 'website']);
  }

  returnToProfile() {
    this.router.navigate(['/user', this.userId]);
  }

  editSite(id: string) {
    this.router.navigate(['/user', this.userId, 'website', id]);
  }

  viewPage(id: string) {
  this.router.navigate(['/user', this.userId, 'website', id, 'page']);
}

  profile() {
    this.router.navigate(['/user', this.userId]);
  }

}
