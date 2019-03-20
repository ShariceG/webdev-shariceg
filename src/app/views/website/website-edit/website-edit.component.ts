import {Component, OnInit, ViewChild} from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Website} from '../../../Models/website.model.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  @ViewChild('websiteForm') websiteForm: NgForm;

  userId: string;
  websiteId: string;
  websites: Website[];
  websiteName: string;
  websiteDescription: string;
  website: any;

  constructor(private websiteService: WebsiteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.userId = params['uid'];
        this.websiteId = params['wid'];
      }
    );
    this.websiteService.findWebsitesByUser(this.userId)
      .subscribe(
        (data: any) => {
          this.websites = data;
        }
      );
    // this.websites = this.websiteService.findWebsitesByUser(this.userId);
    this.websiteService.findWebsiteById(this.websiteId)
      .subscribe(
        (data: any) => {
          this.website = data;
        }
      );
  }

  updateWebsite() {
    console.log(this.website);
    const body = {
      name: this.website.name,
      description: this.website.description
    };
    console.log(body);
    this.websiteService.updateWebsite(this.websiteId, body)
      .subscribe(
        (data: any) => {
          this.website = data;
          this.websiteList();
        }
      );
  }

  deleteSite() {
    console.log(this.websiteId);
    this.websiteService.deleteWebsite(this.websiteId)
      .subscribe(
        (data: any) => {
          const message = data;
          this.router.navigate(['/user', this.userId, 'website']);
        }
      );
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
