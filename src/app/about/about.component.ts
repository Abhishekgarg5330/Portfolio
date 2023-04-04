import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  technologies : Array<any> = [
    {
      image: "./assets/icons/html-5.svg",
      name: "HTML5",
    },
    {
      image: "./assets/icons/js.svg",
      name: "Javascript",
    },
    {
      image: "./assets/icons/npm.svg",
      name: "NPM",
    },
    {
      image: "./assets/icons/nodejs.svg",
      name: "Node",
    },
    {
      image: "./assets/icons/angularjs.svg",
      name: "Angular",
    },
    {
      image: "./assets/icons/typescript.svg",
      name: "Typsecript",
    },
    {
      image: "./assets/icons/react.svg",
      name: "React",
    },
    {
      image: "./assets/icons/mongodb.svg",
      name: "MongoDB",
    },
    {
      image: "./assets/icons/bootstrap.svg",
      name: "Bootstrap",
    },
    {
      image: "./assets/icons/icons8-c++.svg",
      name: "C++",
    },
    {
      image: "./assets/icons/python.svg",
      name: "Python",
    },
    {
      image: "./assets/icons/mysql.svg",
      name: "MySQL",
    },
    {
      image: "./assets/icons/icons8-php-logo.svg",
      name: "PHP",
    },
    {
      image: "./assets/icons/java.svg",
      name: "Java",
    },
    {
      image: "./assets/icons/icons8-css3.svg",
      name: "CSS",
    },

  ]

  ngOnInit(): void {
  }

}
