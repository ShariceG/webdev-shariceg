import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PageService} from '../../../services/page.service.client';
import {Page} from '../../../Models/page.model.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

  @ViewChild('pageForm') pageForm: NgForm;

  pageName: string;
  pageDescription: string;
  userId: string;
  websiteId: string;
  page: any;

  errorFlag: boolean;
  errorMessage: string;


  constructor(private router: Router, private route: ActivatedRoute, private pageService: PageService) {}

  ngOnInit() {
    this.errorFlag = false;
    this.errorMessage = 'Please fill all fields';

    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
    });
  }

  addPage() {
    this.pageName = this.pageForm.value.pageName;
    this.pageDescription = this.pageForm.value.description;

    const body = {
      name: this.pageName,
      description: this.pageDescription
    };

    console.log(body);

    if (this.pageName && this.pageDescription) {
      this.pageService.createPage(this.websiteId, body)
        .subscribe(
          (data: any) => {
            this.page = data;
            this.errorFlag = false;
            this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
          },
          (error: any) => {
            console.log('HERE AT ERROR');
            this.errorFlag = true;
          }
        );
    } else {
      this.errorFlag = true;
    }

  }


  profile() {
    this.router.navigate(['/user', this.userId]);
  }

  pageList() {
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
  }

  newPage() {
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', 'new']);
  }

}
