import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public static readonly SLIDE_DIRECTION_RIGHT = "right"
    public static readonly SLIDE_DIRECTION_LEFT = "left"

    private currentSlideIndex: number = 0
    private images: Element[]
    
    ngOnInit() {
        this.images = Array.from(document.getElementsByClassName("slide_image"))
        this.changeSlider()
    }
    
    constructor() {}
    
    changeSlider(direction?) {    
        this.images.forEach(image => {
            (image as HTMLElement).style.display = "none"
        });
    
        if (direction == HomeComponent.SLIDE_DIRECTION_RIGHT 
            && this.currentSlideIndex < this.images.length - 1) {
                this.currentSlideIndex++    
            }
        
        if (direction == HomeComponent.SLIDE_DIRECTION_LEFT
            && this.currentSlideIndex > 0) {
                this.currentSlideIndex--
            }
        
        ((this.images[this.currentSlideIndex]) as HTMLElement).style.display = "block"
    }

    changeSliderToIndex(index) {
        if (index < this.images.length && index >= 0) {
            this.currentSlideIndex = index
            this.changeSlider()
        } 
    }
}
