import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Website} from '../../../Models/website.model.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  userId: string;
  websiteId: string;
  websites: Website[];
  websiteName: string;
  websiteDescription: string;
  website: Website;

  constructor(private websiteService: WebsiteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.userId = params['uid'];
        this.websiteId = params['wid'];
      }
    );
    this.websites = this.websiteService.findWebsitesByUser(this.userId);
    this.website = this.websiteService.findWebsiteById(this.websiteId);
  }

  deleteSite() {
    this.websiteService.deleteWebsite(this.websiteId);
    this.router.navigate(['/user', this.userId, 'website']);
  }

  profile() {
    this.router.navigate(['/user', this.userId]);
  }

  editSite(id: string) {
    this.router.navigate(['/user', this.userId, 'website', id]);
  }

  pageList(id: string) {
    this.router.navigate(['/user', this.userId, 'website', id, 'page']);
  }

  newSite() {
    this.router.navigate(['/user', this.userId, 'website', 'new']);
  }

  websiteList() {
    this.router.navigate(['/user', this.userId, 'website']);
  }

}
