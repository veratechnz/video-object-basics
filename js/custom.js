// Custom Javascript Here
//1. There is a problem with the code.
//2. Place the spaghetti code in function and invoke.
//3. Use a parameter and an argument for one of your functions.
//4. Place all functions, variables and object - in an object. Invoke the methods 	

// 1. Spag & Broken Code
// var video = document.createElement('video');
// video.src = palm.mp4';
// video.autoPlay = true;
// video.play();
// document.body.appendChild(video);
// var videoPath = 'palms.mp4';


// 2. and 3. Placed in a function and invoked
// var refObj = {
// 	videoPath: 'palms.mp4'
// }

// function createVideo(whatVideo){
// 	var video = document.createElement('video');
// 	video.src = 'palms.mp4';
// 	video.autoPlay = true;
// 	video.play();
// 	document.body.appendChild(video);	
// }

// createVideo(refObj.videoPath);

// 4. Final. Placed in an object
// var videoObject = {
// 	videoPath: 'palms.mp4', 
// 	create: function(whatPath){
// 		var video = document.createElement('video');
// 		video.src = whatPath;
// 		video.autoPlay = true;
// 		video.play();
// 		document.body.appendChild(video);	
// 	}
// };

// videoObject.create(videoObject.videoPath);


//5. The nameSpacing pattern

//Our Scope protected Global Object:
//Create empty object
// var videoObject = {};

// //Add property and method to the js with dot notation. 
// videoObject.videoPath = 'palms.mp4';
// videoObject.create = function (whatPath) {
// 	var video = document.createElement('video');
// 	video.src = whatPath;
// 	video.autoPlay = true;
// 	video.play();
// 	document.body.appendChild(video);		
// };

// // Adding nest objects and data/properties
// videoObject.nestObj = {};
// videoObject.nestObj.dat = {a: 1, b: 2};


// Call the object and method
// videoObject.create(videoObject.videoPath);


// 6. We use a Namespacing function to make sure that we dont overrride
// existing functions and properties

if (typeof videoObject === 'undefined') {
	var videoObject = {};
}
// shorthand === var MyAPP = MYAPP || {};

//The following is a non destructive namespacing function. It first checks for the name
// and only writes it to the object if it does NOT already exist.
videoObject.namespace = function(ns_string){
	var parts = ns_string.split('.');
	var parent = videoObject; 
	var i;

	//Strip redundant leading global
	if (parts[0] === 'videoObject') {
		parts = parts.slice(1);
	}

	for (i = 0; i < parts.length; i += 1) {
		//create a property if it doesn't exist
		if (typeof parent[parts[1]] === 'undefined') {
			parent[parts[i]] = {};
		}
			parent = parent[parts[i]];
	}
	return parent;
};

//Now we can add properties in the following way.
videoObject.namespace('we.can.see.some.deep.nested.property'); 


//Add property and method to the js with dot notation. 
videoObject.videoPath = 'palms.mp4';
videoObject.create = function (whatPath) {
	var video = document.createElement('video');
	video.src = whatPath;
	video.autoPlay = true;
	video.play();
	document.body.appendChild(video);		
};

//Simple wat of addign properties to the object. 
videoObject.nestObj = {};
videoObject.nestObj.dat = {a: 1, b: 2};

videoObject.create(videoObject.videoPath);















