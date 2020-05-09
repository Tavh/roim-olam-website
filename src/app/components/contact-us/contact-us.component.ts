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
  
    constructor() {}
  
    ngOnInit() {
    }
 
}
