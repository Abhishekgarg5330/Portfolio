import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // host: {
  //   '(window:scroll)': 'onScroll($event)'
  // }
})


export class AppComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void{
    AOS.init();
    this.activatedRoute.fragment.subscribe((value) => {
      this.jumpTo(value);
      console.log(value);
    })
  }

  isScrolled = false;
  currPos: Number = 0;
  startPos: Number = 0;
  changePos: Number = 100;



  jumpTo(section: any){
      document.getElementById(section)?.scrollIntoView({behavior: 'smooth'})
  }

  onScroll(evt : any){

    this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);

    if(this.currPos >= this.changePos)
      this.isScrolled = true;
    else
      this.isScrolled = false;
  }

  scrollToSection(section : string) : void{
    const name = document.querySelector(section) as HTMLElement;
    const line1 = document.querySelector('.line1') as HTMLElement;
    const line2 = document.querySelector('.line2') as HTMLElement;

    line1.classList.remove('animate-line1');
    line2.classList.remove('animate-line2');

    name.scrollIntoView({behavior: 'smooth'});

    const menu = document.querySelector('.menu') as HTMLElement;
    menu.classList.remove('active');
  }
}
