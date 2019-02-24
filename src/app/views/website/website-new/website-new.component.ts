import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {PageService} from '../../../services/page.service.client';
import {NgForm} from '@angular/forms';
import {Website} from '../../../Models/website.model.client';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  @ViewChild('websiteForm') websiteForm: NgForm;

  websiteName: string;
  websiteDescription: string;
  userId: string;
  websites: Website[];

  errorFlag: boolean;
  errorMessage: string;

  constructor(private router: Router, private route: ActivatedRoute, private websiteService: WebsiteService) { }

  ngOnInit() {
    this.errorFlag = false;
    this.errorMessage = 'Please fill all fields';
    this.route.params.subscribe(
      (params: any) => {
        this.userId = params['uid'];
      }
    );
    this.websites = this.websiteService.findWebsitesByUser(this.userId);
  }

  createWebsite() {
    this.websiteName = this.websiteForm.value.websiteName;
    this.websiteDescription = this.websiteForm.value.websiteDescription;

    console.log(this.websiteName);
    console.log(this.websiteDescription);
    if (this.websiteName && this.websiteDescription) {
      this.errorFlag = false;
      const website = new Website('', this.websiteName, this.userId, this.websiteDescription);
      this.websiteService.createWebsite(website);
      this.router.navigate(['/user', this.userId, 'website']);

    } else {
      this.errorFlag = true;
    }
  }

  websiteList() {
    this.router.navigate(['/user', this.userId, 'website']);
  }

  editSite(id: string) {
    this.router.navigate(['/user', this.userId, 'website', id]);
  }

  pageList(id: string) {
    this.router.navigate(['/user', this.userId, 'website', id, 'page']);
  }

  profile() {
    this.router.navigate(['/user', this.userId]);
  }

  newSite() {
    this.router.navigate(['/user', this.userId, 'website', 'new']);
  }
}

