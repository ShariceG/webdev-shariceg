import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../Models/widget.model.client';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {

  constructor(private widgetService: WidgetService, private router: Router, private route: ActivatedRoute) { }

  userId: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  widget: Widget;

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.userId = params['uid'];
        this.websiteId = params['wid'];
        this.pageId = params['pid'];
        this.widgetId = params['wgid'];
      }
    );
    // this.widget = this.widgetService.findWidgetById(this.widgetId);
    // console.log(this.widget);

    this.widgetService.findWidgetById(this.widgetId)
      .subscribe(
        (data: any) => {
          this.widget = data;
        }
      );
  }
}
