import {Component, OnInit, ViewChild} from '@angular/core';
import {Page} from '../../../Models/page.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {PageService} from '../../../services/page.service.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  @ViewChild('pageForm') pageForm: NgForm;

  userId: string;
  websiteId: string;
  page: any;
  pageId: string;

  constructor(private router: Router, private route: ActivatedRoute, private pageService: PageService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
    });

    this.pageService.findPageById(this.pageId)
      .subscribe(
        (data: any) => {
          this.page = data;
        }
      );
  }

  updatePage() {
    const body = {
      name: this.page.name,
      description: this.page.description
    };
    console.log(body);

    this.pageService.updatePage(this.pageId, body)
      .subscribe(
        (data: any) => {
          this.page = data;
          this.pageList();
        }
      );
  }

  deleteSite() {
    this.pageService.deletePage(this.page._id)
      .subscribe(
        (data: any) => {
          const message = data;
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
        }
      );
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
