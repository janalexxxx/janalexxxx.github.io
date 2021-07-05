//////////////////////////////////////////////
//Script affecting the website's Work section
//////////////////////////////////////////////

//Global variables
var Project = function(title, idName, categories, previewIMG, description, link, allIMG) {
	this.title = title;
	this.idName = idName;
	this.categories = categories;
	this.previewIMG = previewIMG;
	this.description = description;
	this.link = link
	this.allIMG = allIMG
};

var descrDashboardDeath = 'Dashboard Death is a visualization of unnatural causes of death all around the world. Its goal is to offer an unbiased look at the current status of humanity all around the world. It uses the latest data from GHDx (http://ghdx.healthdata.org).';
var descrDashboard = 'I asked myself what can we potentially do to raise global awareness and spread the adaptation of a global perspective among people. What I came up with as an answer to this question is the concept for Dashboard Earth. An online aggregation and visualization of global data to objectively monitor progress of the human species and the influencing factors regarding it. Its goal is to provide people with a global perspective to start solving today&#39;s global problems in a sustainable manner.';
var descrRenderings = 'Since the fundamental building blocks of digital interfaces are based on established physical interaction patterns, I wanted to explore the most iconic physical product interfaces in more depth. The exploration resulted in short series of renderings.';
var descrCoup = 'When we launched the e-scooter-sharing service COUP at DV in summer 2016, we wanted to make sure to further improve the user experience for a maximum of customer satisfaction and conversion directlty after launch. For each iteration we built a Flinto or Framer protoype and tested it with actual users of our service in their homes. ';
var descrLoadfox = 'With an average blank volume of 25% the utilization of freight trucks is far from perfect today. To change that we built the smart freight exchange platform Loadfox at DV, which leverages a smart algorithm to maximize the utilization of freight trucks. After the team had already fleshed out the concept and created first wireframes, I joined to create the actual UI of the product as well as its landing page.';
var descrSanitaer = 'My father&#39;s plumbing and heating installment business needed a proper website explaining the company and its services. So I stepped in and created not only the concept and UI-design, but also wrote all the texts and shot all the pictures for the site.';
var descrIcons = 'Sometimes I just want to have fun, so I create things that do not really serve any value. These are a few of them.';
var descrFoundd = 'The movie recommendation service Foundd suffered from low user retention rates. So I came in to analyze the cause and conceptualize potential solutions. I digged through the data, interviewed heavy as well as reluctant users of the service and based on my findings then created UI-designs for a potential next version.';

var Projects = [
	new Project('Dashboard Death', 'dashboarddeath', ['UI-Design', 'Development'], 'DashboardDeath-Website.png', descrDashboardDeath, '<a href="https://www.dashboard-death.aaalex.design>Check it out</a>'),
	new Project('Dashboard Earth', 'dashboard', ['Concept', 'UI-Design'], 'img-project.png', descrDashboard, '[ Fun project only ]', ['<img src="img/img-project.png" alt="Dashboard Earth Mockup">']),
	new Project('Interface Renderings', 'renderings', ['Visual Design'], 'render-01.png', descrRenderings, '[ Fun project only ]', ['<img src="img/render-01.png" alt="Render 01">', '<img src="img/render-02.png" alt="Render 02">', '<img src="img/render-03.png" alt="Render 03">', '<img src="img/render-04.png" alt="Render 04">']),
	new Project('COUP', 'coup', ['Prototyping', 'Testing'], 'coup-preview.png', descrCoup, '<a href="https://www.joincoup.com">joincoup.com</a>', ['<img src="img/coup-stopover-flow.png" alt="Coup Stopover Flow">']),
	new Project('Loadfox', 'loadfox', ['UI-Design'], 'loadfox-preview.png', descrLoadfox, '<a href="https://www.loadfox.eu">loadfox.eu</a>', ['<img src="img/loadfox-ui.png" alt="Loadfox UI">']),
	new Project('Sanit&auml;r Alexander', 'sanitaer', ['Concept', 'UI-Design'], 'sanitaer-preview.png', descrSanitaer, '<a href="https://www.sanitaer-alexander.de">sanitaer-alexander.de</a>', ['<img src="img/00-home.png" alt="Sanitaer Alexander Landing Page">']),
	new Project('Icons', 'icons', ['Visual Design'], 'icon-02.png', descrIcons, '[Fun project only]', ['<img src="img/icon-01.png" alt="Y-Wing Fighter Icon">', '<img src="img/icon-02.png" alt="Snowspeeder Icon">', '<img src="img/icon-03.png" alt="X-Wing Fighte Icon">', '<img src="img/icon-04.png" alt="Racing Bike Illustration">', '<img src="img/icon-05.png" alt="Apple Pencil Illustration">', '<img src="img/icon-06.png" alt="Marker Illustration">']),
	new Project('Foundd', 'foundd', ['Research', 'UI-Design'], 'foundd-preview.png', descrFoundd, '<a href="https://foundd.com"><strike>foundd.com</strike></a> [Startup closed down]', ['<img src="img/foundd.png" alt="Foundd Redesign Story">'])
];




$(document).ready(function() {
	var workContainer = $('#container-projects');
	var darkOverlay = $('#dark-overlay');
	
	//Variables for handling touch events
	var touchStartX, touchStartY, endTouchX, endTouchY;
	
	
	
	
	for(var i=0; i<Projects.length; i++) {
		//Add <br> to titles with multiple words
		var projectTitleHTML = Projects[i].title.replace(" ", "<br>");
		 
		//Add HTML for work previews into work container
		workContainer.append('\
			<!--Project' + Projects[i].title + '-->\
			<div class="project-preview" id="project-preview-' + Projects[i].idName + '">\
				<div class="project-preview-info">\
					<div class="project-preview-info-content">\
						<div class="project-preview-title bold-title">\
							<h1>' + projectTitleHTML + '</h1>\
							<div class="project-categories">\
							</div>\
						</div><!--/project-preview-title-->\
					</div><!--/project-preview-info-content-->\
				</div><!--/project-preview-info-->\
				<img src="img/' + Projects[i].previewIMG + '" alt="Mockup Image" class="project-preview-img">\
			</div><!--/project-preview-->\
		');
		
		//Create detail pages
		darkOverlay.before('\
			<div class="project-detail" id="project-detail-' + Projects[i].idName + '">\
				<div class="close-btn-details" id="close-btn-' + Projects[i].idName + '">\
					<img src="img/icn-close.svg" alt="close button" class="icn-close">\
				</div>\
				<!--Content here-->\
				<div class="description">\
					<h1>' + Projects[i].title + '</h1>\
					<div class="project-categories-' + Projects[i].idName + '">\
					</div>\
					<div class="description-text">\
						<p>' + Projects[i].description + '</p>\
					</div>\
					<div class="link-container">\
						<p>' + Projects[i].link + '</p>\
					</div>\
				</div>\
			</div>\
		')
		
		//add category labels to preview and to details
		var categoriesTotal = Projects[i].categories.length;
		for (w = 0; w < categoriesTotal; w++) {
			var categoryName = Projects[i].categories[w]
			//add to detail page
			$('.project-categories-' + Projects[i].idName).append('<div class="category-label">' + categoryName + '</div>');
			var previewElem = $('#project-preview-' + Projects[i].idName + ' .project-categories');
			console.log(Projects[i].idName);
			//add to preview
			previewElem.append('<div class="category-label">' + categoryName + '</div>');
		};
		
		//add images to detail page
		var imagesTotal = Projects[i].allIMG.length;
		for (v = 0; v < imagesTotal; v++) {
			var image = Projects[i].allIMG[v];
			$('#project-detail-' + Projects[i].idName).append(image);
		};
	};
	
	
	
	
	//Add event listener
	for(var i=0; i < Projects.length; i++){
		(function(_i){
			var idName = Projects[i].idName;
			
			//Differentiate in between browsers that support touch events and those that don't
			if(('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
				//Make sure a drag is not misunderstood as a tap
				$('body').on('touchstart', function(e) {
					touchStartX = e.changedTouches[0].clientX;
					touchStartY = e.changedTouches[0].clientY;
				});
				
				$('#project-preview-' + idName).on('touchend', function(e) {
					touchEndX = e.changedTouches[0].clientX;
					touchEndY = e.changedTouches[0].clientY;
					
					if((Math.abs(touchEndX-touchStartX) <= 2) && (Math.abs(touchEndY-touchStartY) <= 2)) {
						openDetailPage(e, idName);
					};
				});
				
				
			} else {
				//Event listeners for browsers not supporting touch input
				$('#project-preview-' + idName).on('click', function(e) {
					openDetailPage(e, idName);
				});
			
				//Add hover interaction
				$('#project-preview-' + idName).on('mouseenter', function(e) {
					$('#project-preview-' + idName + ' .project-preview-info').css('display', 'table');
					$('#project-preview-' + idName).css({
						'transform': 'scale(1.1)',
						'box-shadow': '0px 10px 30px rgba(0,0,0,.04)'
					});
				});
				
				$('#project-preview-' + idName).on('mouseleave', function(e) {
					$('#project-preview-' + idName + ' .project-preview-info').hide();
					$('#project-preview-' + idName).css({
						'transform': 'scale(1.0)',
						'box-shadow': '0px 8px 20px rgba(0,0,0,.09)'
					});
				});
			};
			
			//Events detail page
			$('#close-btn-' + idName).on('click', function(e){
				closeDetailPage(e, idName);
			});
		}(i));
	};
	
	
		
	


	
	function openDetailPage(e, idName) {
		$('.header-content').css('display', 'none');
		
		scroll(0,0);
		
		$('#dark-overlay').css({
			'display': 'block',
			'opacity': '1.0'
		});
		$('#project-detail-' + idName).css({
			'display': 'block',
		});
		
		setTimeout(function() {
			$('#project-detail-' + idName).css({
				'top': '0',
				'opacity': '1.0'
			});
		}, 50);
	};
	
	function closeDetailPage(e, idName){
		$('.header-content').css('display', 'inline-block');
		
		scroll(0,0);
		
		$('#project-detail-' + idName).css({
			'display': 'none',
			'top': '150px',
			'opacity': '0'
		});
		$('#dark-overlay').css({
			'display': 'none',
			'opacity': '0'
		});
	};
});