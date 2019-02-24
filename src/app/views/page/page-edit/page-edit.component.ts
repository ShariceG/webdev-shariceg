import { Component, OnInit } from '@angular/core';
import {Page} from '../../../Models/page.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {PageService} from '../../../services/page.service.client';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  userId: string;
  websiteId: string;
  page: Page;

  constructor(private router: Router, private route: ActivatedRoute, private pageService: PageService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.page = this.pageService.findPageById(params['pid']);
    });
  }

  deleteSite() {
    this.pageService.deletePage(this.page._id);
    this.router.navigate(['/user', this.userId, 'website']);
  }

  profile() {
    this.router.navigate(['/user', this.userId]);
  }

  pageList() {
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
  }

  pageEdit() {
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.page._id]);
  }
}
