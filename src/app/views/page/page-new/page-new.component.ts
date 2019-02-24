import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PageService} from '../../../services/page.service.client';
import {Page} from '../../../Models/page.model.client';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

  userId: string;
  websiteId: string;


  constructor(private router: Router, private route: ActivatedRoute, private pageService: PageService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
    });
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
