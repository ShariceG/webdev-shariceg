import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Heading} from '../../../../Models/widget.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {

  @ViewChild('htmlForm') htmlForm: NgForm;

  userId: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  widget: any;

  constructor(private route: ActivatedRoute, private router: Router, private widgetService: WidgetService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.widgetId = params['wgid'];
      // this.widget = this.widgetService.findWidgetById(params['wgid']);
    });
    this.widgetService.findWidgetById(this.widgetId)
      .subscribe(
        (data: any) => {
          this.widget = data;
          console.log(this.widget);
        }
      );
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widget._id)
      .subscribe(
        (data: any) => {
          const message = data;
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
        }
      );
  }

  profile() {
    this.router.navigate(['/user', this.userId]);
  }

  widgetList() {
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
  }

  widgetEdit() {
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', this.widget._id]);
  }

  updateHtml() {
    const body = {
      name: this.widget.name,
      text: this.widget.text,
    };
    this.widgetService.updateWidget(this.widgetId, body)
      .subscribe(
        (data: any) => {
          this.widget = data;
          this.widgetList();
        }
      );
  }

}
