import { Component, OnInit } from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, RouterLinkActive} from '@angular/router';


@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  websiteId: string;
  pages = [];

  constructor(private pageService: PageService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.websiteId = params['wid'];
      }
    );
    this.pages = this.pageService.findPagesByWebsiteId(this.websiteId);
    console.log(this.pages);
  }

}
