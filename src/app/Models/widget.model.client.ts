export class Widget {
  _id: string;
  name: string;
  widgetType: string;
  pageId: string;
  text: string
  constructor(_id, name, widgetType, pageId, text) {
    this._id = _id;
    this.name = name;
    this.widgetType = widgetType;
    this.pageId = pageId;
    this.text = text
  }
}

export class Heading extends Widget {
  size: number;

  constructor(_id, name, pageId, size, text) {
    super(_id, name, 'HEADING', pageId, text);
    this.size = size;
  }
}

export class Image extends Widget {
  width: string;
  url: string;

  constructor(_id, name, pageId, text, width, url) {
    super(_id, name, 'IMAGE', pageId, text);
    this.width = width;
    this.url = url;
    this.text = text;
  }
}

export class YouTube extends Widget {
  width: string;
  url: string;

  constructor(_id, name, pageId, text, width, url) {
    super(_id, name, 'YOUTUBE', pageId, text);
    this.width = width;
    this.url = url;
  }
}
