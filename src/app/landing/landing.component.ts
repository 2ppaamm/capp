import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { CourseService } from '../services/course.service';
import { AuthService } from '../services/auth.service';
declare var jQuery:any;
declare var $ :any;

@Component({
  selector: 'ag-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  courses: any;
  selectedCourse: Course;
  constructor(private courseService: CourseService, private authService:AuthService) { }

  ngOnInit() {
	/* =================================
	===  RESPONSIVE VIDEO           ====
	=================================== */

	$(".video-container").fitVids();

	    $(document).ready(function () {

	    $("#feedbacks").owlCarousel({

	        navigation: false, // Show next and prev buttons
	        slideSpeed: 800,
	        paginationSpeed: 400,
	        autoPlay: 5000,
	        singleItem: true
	    });

	    var owl = $("#screenshots");

	    owl.owlCarousel({
	        items: 4, //10 items above 1000px browser width
	        itemsDesktop: [1000, 4], //5 items between 1000px and 901px
	        itemsDesktopSmall: [900, 2], // betweem 900px and 601px
	        itemsTablet: [600, 1], //2 items between 600 and 0
	        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
	    });


	});


	/* =================================
	===  Nivo Lightbox              ====
	=================================== */
	$(document).ready(function () {

	    $('#screenshots a').nivoLightbox({
	        effect: 'fadeScale',
	    });

	});

  	this.courses = this.courseService.getCourses();
    console.log(this.courses);
  }

  selectCourse(course: Course) {
  	this.selectedCourse = course;
  }

  public login(){
  	this.authService.login();
  }
}