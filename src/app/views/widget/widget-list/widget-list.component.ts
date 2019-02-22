import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {WidgetService} from '../../../services/widget.service.client';


@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  userId: string;
  pageId: string;
  widgets = [];

  constructor(private widgetService: WidgetService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.userId = params['uid'];
        this.pageId = params['pid'];
      }
    );
    this.widgets = this.widgetService.findWidgetsByPageId(this.pageId);
    console.log(this.widgets);
  }

  safe(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
