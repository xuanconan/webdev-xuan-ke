// executed on client

import {Website} from '../models/website.model.client';
import {Injectable} from '@angular/core';


// make class usable for all components
@Injectable()
export class WebsiteService {
  // users are a group of json objects, here will be user(data structure)
  websites: Website[] = [
    {"_id": "123", "name": "Facebook", "developerId": "456", "description": "Lorem"},
    {"_id": "234", "name": "Tweeter", "developerId": "456", "description": "Lorem"},
    {"_id": "456", "name": "Gizmodo", "developerId": "456", "description": "Lorem"},
    {"_id": "890", "name": "Go", "developerId": "123", "description": "Lorem"},
    {"_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem"},
    {"_id": "678", "name": "Checkers", "developerId": "123", "description": "Lorem"},
    {"_id": "789", "name": "Chess", "developerId": "234", "description": "Lorem"}
  ];

  // adds the website parameter instance to the local websites array.
  // The new website's developerId is set to the userId parameter

  createWebsite(userId, website) {

  }

  //retrieves the websites in local websites array whose developerId matches the parameter userId

  findWebsitesByUser(userId: String) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x].developerId === userId) {
        return this.websites[x];
      }
    }
  }

  // retrieves the website in local websites array whose _id matches the websiteId parameter

  findWebsitesById(websiteId: String) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {
        return this.websites[x];
      }
    }
  }

  //updates the website in local websites array whose _id matches the websiteId parameter

  updateWebsite(websiteId, website) {

  }

  // removes the website from local websites array whose _id matches thewebsiteId parameter

  deleteWebsite(websiteId) {

  }

  api = {
    'createWebsite' : this.createWebsite,
    'findWebsitesById': this.findWebsitesById
  };


}
