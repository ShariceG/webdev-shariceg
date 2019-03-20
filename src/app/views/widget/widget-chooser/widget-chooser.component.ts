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
  body: any;

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
      case 'HEADING': {
        this.body = {
          name: '',
          widgetType: 'HEADING',
          size: 4,
          text: ''
        };
        break;
      }
      case 'YOUTUBE': {
        this.body = {
          name: '',
          widgetType: 'YOUTUBE',
          width: '100%',
          url: ''
        };
        break;
      }
      case 'IMAGE': {
        this.body = {
          name: '',
          widgetType: 'IMAGE',
          width: '100%',
          url: ''
        };
        break;
      }
    }

    this.widgetService.createWidget(this.pageId, this.body)
      .subscribe(
        (data: any) => {
          this.widget = data;
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', this.widget._id]);
          console.log(this.widget);
        }
      );

    // this.router.navigate(['/user', this.userId]);
    // this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', this.widget._id]);

    // this.widgetService.createWidget(this.widget);


  }

  newWidget() {
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', 'new']);
  }

  widgetList() {
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
  }


}
