import { Component, OnInit } from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router, RouterLinkActive} from '@angular/router';


@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  userId: string;
  websiteId: string;
  pages = [];

  constructor(private pageService: PageService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.userId = params['uid'];
        this.websiteId = params['wid'];
      }
    );
    this.pageService.findPagesByWebsiteId(this.websiteId)
      .subscribe(
        (data: any) => {
          this.pages = data;
        }
      );
  }

  widgetList(id: string) {
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', id, 'widget']);
  }

  editPage(id: string) {
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', id]);
  }

  profile() {
    this.router.navigate(['/user', this.userId]);
  }

  websiteList() {
    this.router.navigate(['/user', this.userId, 'website']);
  }

  newWebsite() {
  //  ['/user/:uid/website/:wid/page/new']
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', 'new']);
  }

  pageList() {
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
  }

}
