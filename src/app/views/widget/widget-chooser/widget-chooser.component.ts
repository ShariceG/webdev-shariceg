import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import {Heading, YouTube, Image} from '../../../Models/widget.model.client';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {

  userId: string;
  websiteId: string;
  pageId: string;
  widget: any;

  constructor(private route: ActivatedRoute, private router: Router, private widgetService: WidgetService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
    });
  }

  profile() {
    this.router.navigate(['/user', this.userId]);
  }

  createWidget(type: string) {
    const widgetType = type.toUpperCase();
    switch (widgetType) {
      case 'HEADER': {
        this.widget = new Heading('', '', this.pageId, 4, '');
        break;
      }
      case 'YOUTUBE': {
        this.widget = new YouTube('', '', this.pageId, '', '100%', '');
        break;
      }
      case 'IMAGE': {
        this.widget = new Image('', '', this.pageId, '', '100%', '');
        break;
      }
    }

    this.widgetService.createWidget(this.widget);
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', this.widget._id]);

  }

  newWidget() {
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', 'new']);
  }

  widgetList() {
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
  }


}
