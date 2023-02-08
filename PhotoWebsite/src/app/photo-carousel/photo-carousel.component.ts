import { Component } from '@angular/core';

@Component({
  selector: 'app-photo-carousel',
  templateUrl: './photo-carousel.component.html',
  styleUrls: ['./photo-carousel.component.css']
})
export class PhotoCarouselComponent {
  slides: string [] = ['./assets/SBI_Slide_1.jpg', './assets/Eagle_Slide_2.jpg', './assets/Knot_Slide_3.jpg' ]
    i=0;

    getSlide() {
        return this.slides[this.i];
    }

    getPrev() {
        this.i = this.i===0 ? 0 : this.i - 1;
    }
//edit here    
    getNext() {
        this.i = this.i===this.slides.length ? this.i : this.i + 1;
    }

}

