import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {Heading} from '../../../../Models/widget.model.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {

  @ViewChild('headerForm') headerForm: NgForm;

  userId: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  widget: Heading;

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

  updateHeader() {
    const body = {
      name: this.widget.name,
      text: this.widget.text,
      size: this.widget.size
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
