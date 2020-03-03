import { Component, OnInit } from '@angular/core';
import { UserDetails } from 'src/app/shared/data/user.model';
import { WebsiteStaticContentService } from 'src/app/shared/services/http-constructors/website-static-content.service';
import { SessionStorageManager } from 'src/app/shared/session-storage-manager';
import { WebsitePagePart } from 'src/app/shared/data/enums/webiste-page-part';
import { WebsitePage } from 'src/app/shared/data/enums/website-page';
import { TextWrapper } from 'src/app/shared/data/text-wrapper';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

    currentHeader: string
    currentContent: string
  
    newHeader: string
    newContent: string
  
    isEditEnabled: boolean
  
    public sessionUserDetails: UserDetails
  
    constructor(private websiteStaticContentService: WebsiteStaticContentService) {
      SessionStorageManager.initializeSessionStorageCurrentUserData()
      this.sessionUserDetails = SessionStorageManager.getSessionStorageUserDetails()
  
      this.readPageText(WebsitePagePart.HEADER.toString())
      this.readPageText(WebsitePagePart.CONTENT.toString())
  
      this.setIsEditEnabled(false)
    }
  
    ngOnInit() {
    }
  
    writePageText(websitePagePart: string, newText: string) {
      const observable =  this.websiteStaticContentService.writeStaticContent(WebsitePage.CONTACT_US,
                                                                              websitePagePart,
                                                                              new TextWrapper(newText))
  
      observable.subscribe(
        res => {
          if (res.status == 200) {
            if (websitePagePart == 'HEADER') {
              this.currentHeader = res.body.text
            } else if (websitePagePart == 'CONTENT') {
              this.currentContent = res.body.text
            }
          }
        },
        err => {
          console.log(err)
        })
    }
  
    readPageText(websitePagePart) {
      const observable =  this.websiteStaticContentService.readStaticContent(WebsitePage.CONTACT_US, websitePagePart)
  
      observable.subscribe(
        res => {
          if (res.status == 200) {
            if (websitePagePart == WebsitePagePart.HEADER.toString()) {
              this.currentHeader = res.body.text
            } else if (websitePagePart == WebsitePagePart.CONTENT.toString()) {
              this.currentContent = res.body.text
            }
          }
        },
        err => {
          console.log(err)
        })
    }
  
    setIsEditEnabled(isEditEnabled: boolean) {
      this.isEditEnabled = isEditEnabled
    }
}
