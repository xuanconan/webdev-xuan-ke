// executed on client

import {Page} from '../models/page.model.client';
import {Injectable} from '@angular/core';


// make class usable for all components
@Injectable()
export class PageService {
  // users are a group of json objects, here will be user(data structure)
  page: Page[] = [
    { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
    { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
    { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
  ];

  // adds the page parameter instance to the local pages array. The new
  // page's websiteId is set to the websiteId parameter
  createPage(websiteId, page){

  }

  //retrieves the pages in local pages array whose websiteId matches the parameter websiteId
  findPageByWebsiteId(websiteId) {
    for (let x = 0; x < this.page.length; x++) {
      if (this.page[x].websiteId === websiteId) {
        return this.page[x];
      }
    }
  }

  //retrieves the page in local pages array whose _id matches the pageId parameter
  findPageById(pageId: String) {
    for (let x = 0; x < this.page.length; x++) {
      if (this.page[x]._id === pageId) {
        return this.page[x];
      }
    }
  }

  //updates the page in local pages array whose _id matches the pageId parameter
  updatePage(pageId, page) {

  }

  // removes the page from local pages array whose _id matches the pageId parameter
  deletePage(pageId) {

  }

  api = {
    'createPage' : this.createPage,
    'findPageById': this.findPageById
  };


}
