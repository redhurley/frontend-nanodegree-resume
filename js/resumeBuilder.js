var bio = {
	"name": "Donnie Wang",
	"role": "Product Manager",
	"contacts": {
		"mobile": "310.626.5910",
		"email": "donniewang@gmail.com",
		"github": "redhurley",
		"twitter": "@theDonnieWang",
		"location": "San Francisco"
	},
	"welcomeMsg": "Hello World!",
	"skills": [
		"Product Specs", 
		"Prototyping",
		"Wireframing", 
		"Photoshop",
		"Sketch", 
		"Mixpanel",
		"Localytics", 
		"Usability Testing", 
		"Product Positioning", 
		"Obj-C",
		"Swift", 
		"HTML5",
		"CSS3",
		"JS"
	],
	"picURL": "https://scontent.fsjc1-1.fna.fbcdn.net/hphotos-xta1/v/t1.0-9/11216839_10103299902076615_7689237637258141900_n.jpg?oh=0d4f5a83050af2d832aa51db9591606e&oe=55FF1544"
};

var work = {
	"jobs": [
		{
			"position": "Product Management Consultant",
			"employer": "Zepp Labs",
			"years": "2014 - Present",
			"location": "Los Gatos, CA",
			"description": "Sports training system (motion sensor + mobile apps) that captures and analyzes your performance."
		},
		{
			"position": "Creator",
			"employer": "Snapvite",
			"years": "2014 - Present",
			"location": "San Francisco, CA",
			"description": "Scheduling app for events with limited guest spots that sends expiring SMS invitations based on time or capacity."
		},
		{
			"position": "Director of Marketing",
			"employer": "Raptr",
			"years": "2012 - 2014",
			"location": "Mountain View, CA",
			"description": "Gaming platform and community focused on performance, rewards, and social. Two direct reports."
		},
		{
			"position": "Product Marketing Manager",
			"employer": "NOOK",
			"years": "2012",
			"location": "Palo Alto, CA",
			"description": "Reading apps and tablets."
		},
		{
			"position": "Product Marketing Manager",
			"employer": "HP",
			"years": "2011",
			"location": "Sunnyvale, CA",
			"description": "Palm smartphones and tablets."
		},
		{
			"position": "Brand Manager",
			"employer": "Ubisoft",
			"years": "2008 - 2011",
			"location": "San Francisco, CA",
			"description": "Video game marketing for Assassin’s Creed franchise and various other titles. One direct report."
		},
		{
			"position": "Senior Product Manager",
			"employer": "Topps",
			"years": "2005 - 2008",
			"location": "New York, NY",
			"description": "NBA packaged goods and eTopps.com platform. Two direct reports."
		},
		{
			"position": "Marketing Coordinator",
			"employer": "Upper Deck",
			"years": "2004 - 2005",
			"location": "Carlsbad, CA",
			"description": "NBA and MLB sports cards and memorabilia."
		}
	]
};

var education = {
	"schools": [
		{
			"name": "University of Southern California",
			"years": 2004,
			"location": "Los Angeles, CA",
			"major": "Business Administration"
		},
		{
			"name": "General Assembly",
			"years": 2014,
			"location": "San Francisco, CA",
			"major": "Product Management"
		},
		{
			"name": "Tradecraft",
			"years": 2015,
			"location": "San Francisco, CA",
			"major": "Engineering"
		}
	],
	"onlineClasses": [
		{
			"name": "Udacity",
			"years": "2015",
			"major": "Front-End Web Developer Nanodegree",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		{
			"name": "Codementor",
			"years": "2014 - 2015",
			"major": "iOS Development",
			"url": "https://www.codementor.io/success-stories/product-manager-codementor-better-than-bootcamp"
		}
	]
};

var portfolio = {
	"projects": [
		{
			"name": "Zepp Tennis 2.0",
			"years": "2014 - Present",
			"description": "Sports training system (motion sensor + mobile apps) that captures and analyzes your performance.",
			"imageURL": "https://cmmedia.a.ssl.fastly.net/aa1076ea4d97ff1d1a47/28206085/695x443/resample(lanczos).png"
		},
		{
			"name": "Snapvite iOS",
			"years": "2014 - Present",
			"description": "Scheduling app for events with limited guest spots that sends expiring SMS invitations based on time or capacity.",
			"imageURL": "https://cmmedia.a.ssl.fastly.net/6bc63dc183c0a5776f45/28206079/644x444.webp"
		}
	]
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	var formattedPic = HTMLbioPic.replace("%data%", bio.picURL);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

	$("#header").append(formattedName);
	$("#header").append(formattedRole);
	$("#header").append(formattedMobile);
	$("#header").append(formattedEmail);
	$("#header").append(formattedGithub);
	$("#header").append(formattedTwitter);
	$("#header").append(formattedLocation);
	$("#header").append(formattedPic);
	$("#header").append(formattedWelcomeMsg);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		var i = 0;
		while (i < bio.skills.length) {
	    	var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
	    	$("#skills").append(formattedSkill);
	    	i++;
	  	}
	}

	$("#mapDiv").append(googleMap);

	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedLocation);
};

bio.display();

work.display = function() {
  for (var job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
    var formattedEmployerTitle = formattedEmployer + " " + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedYears = HTMLworkDates.replace("%data%", work.jobs[job].years);
    $(".work-entry:last").append(formattedYears);

    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
};

work.display();

projects.display = function() {
  for (var project in portfolio.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", portfolio.projects[project].name);
    $(".project-entry:last").append(formattedProjectTitle);

    var formattedYears = HTMLprojectDates.replace("%data%", portfolio.projects[project].years);
    $(".project-entry:last").append(formattedYears);

    var formattedDescription = HTMLprojectDescription.replace("%data%", portfolio.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    var formattedImageURL = HTMLprojectImage.replace("%data%", portfolio.projects[project].imageURL);
    $(".project-entry:last").append(formattedImageURL);
  }
};

projects.display();

education.display = function() {
  for (var school in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
    $(".education-entry:last").append(formattedSchool);

    var formattedYears = HTMLschoolDates.replace("%data%", education.schools[school].years);
    $(".education-entry:last").append(formattedYears);

    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedLocation);

    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
    $(".education-entry:last").append(formattedMajor);
  }
  $(".education-entry:last").append(HTMLonlineClasses);
  for (var onlineClass in education.onlineClasses) {
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[onlineClass].name);
    var formattedMajor = HTMLonlineTitle.replace("%data%", education.onlineClasses[onlineClass].major);
    var formattedClass = formattedMajor + formattedSchool;
    $(".education-entry:last").append(formattedClass);

    var formattedYears = HTMLonlineDates.replace("%data%", education.onlineClasses[onlineClass].years);
    $(".education-entry:last").append(formattedYears);

    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineClasses[onlineClass].url);
    $(".education-entry:last").append(formattedURL);        
  }
};

education.display();