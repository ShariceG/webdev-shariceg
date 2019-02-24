import {DomSanitizer} from '@angular/platform-browser';
import {Injectable, SecurityContext} from '@angular/core';
import {Heading, Widget, Image, YouTube} from '../Models/widget.model.client';

@Injectable()

export class WidgetService {
  constructor() {}

  widgets: any = [(new Heading('123', 'Heading 1', '321', 2, 'GIZMODO')),
    (new Heading('234', 'Heading 2', '321', 4, 'Lorem ipsum')),
    (new Image('345', 'Shuffle Image', '321', 'A shuffling image', '100%', 'http://lorempixel.com/400/200/')),
    (new Heading('567', 'Heading 3', '321', 4, 'Lorem ipsum')),
    (new YouTube('678', 'Boat Video', '321', 'a video about a boat', '100%', 'https://www.youtube.com/embed/AM2Ivdi9c4E'))];


  // widgets = [{'_id': '123', 'widgetType': 'HEADING', 'pageId': '321', 'size': 2, 'text': 'GIZMODO'},
  //   {'_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
  //   {
  //     '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100%',
  //     'url': 'http://lorempixel.com/400/200/'
  //   },
  //   {'_id': '567', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
  //   {
  //     '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '321', 'width': '100%',
  //     'url': 'https://www.youtube.com/embed/AM2Ivdi9c4E'
  //   }
  // ];

  api = {
    'createWidget' : this.createWidget,
    'findWidgetByPageId' : this.findWidgetsByPageId,
    'findWidgetById' : this.findWidgetById,
    'updateWidget' : this.updateWidget,
    'deleteWidget' : this.deleteWidget
  };

  createWidget(widget: any) {
    widget._id = Math.random().toString();
    this.widgets.push(widget);
  }

  findWidgetsByPageId(pageId: string) {
    const list = [];
    for ( let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x].pageId === pageId) {
        list.push(this.widgets[x]);
      }
    }
    return list;
  }

  findWidgetById(widgetId: string) {
    for ( let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        return this.widgets[x];
      }
    }
  }

  updateWidget(widgetId: string, widget: Widget) {
    const newWidget = widget;
    newWidget._id = widgetId;
    for ( let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x] === widget) {
        this.widgets[x] = newWidget;
      }
    }
  }

  deleteWidget(widgetId: string) {
    for ( let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        this.widgets.splice(x, 1);
      }
    }
  }
}
