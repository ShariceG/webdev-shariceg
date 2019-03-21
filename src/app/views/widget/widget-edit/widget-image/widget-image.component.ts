import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {Heading, Image, YouTube} from '../../../../Models/widget.model.client';
import {NgForm} from '@angular/forms';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {

  @ViewChild('imageForm') imageForm: NgForm;
  @ViewChild('uploadForm') uploadForm: NgForm;

  userId: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  widget: Image;
  baseUrl: string;

  errorFlag: boolean;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private router: Router, private widgetService: WidgetService) { }

  ngOnInit() {
    this.baseUrl = environment.baseUrl;

    this.route.params.subscribe(params => {
      this.errorFlag = false;
      this.errorMessage = ' must be valid image type';
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
        }
      );
    console.log(this.widget);
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

  updateImage() {
    let url = this.widget.url;
    if (this.imageForm.value.imageUrl) {
      url = this.imageForm.value.imageUrl;
    }

    const body = {
      name: this.widget.name,
      text: this.widget.text,
      url: url,
      width: this.widget.width
    };
    this.widgetService.updateWidget(this.widgetId, body)
      .subscribe(
        (data: any) => {
          this.widget = data;
          this.widgetList();
        }
      );

    // const newurl = this.imageForm.value.imageUrl;
    // console.log(newurl);
    // const newWidget = new Image(this.widget._id, this.widget.name, this.widget.pageId, this.widget.text, this.widget.width, newurl);
    // this.widget.url = newurl;
  }

  uploadImage() {
    console.log(this.uploadForm);
    console.log(this.uploadForm.value);
    const file = this.uploadForm.value.myFile;


    this.widgetService.uploadImage(this.widgetId, file)
      .subscribe(
        (data: any) => {
          this.widget = data;
          this.widgetList();
        }
      );
  }

}
