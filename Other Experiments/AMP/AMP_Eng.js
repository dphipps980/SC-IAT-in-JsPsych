define(['pipAPI', 'https://dphipps980.github.io/SC-IAT-in-JsPsych/jsPsych/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'Physical Activity',  //Will be used in the user feedback 
				nameForLogging : 'Physical Activity', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'Exercise'}, 
					{word : 'Workout'}, 
					{word : 'Running'}, 
					{word : 'Moving'}, 
					{word : 'Physical Activity'}]

			}, 
			{
				nameForFeedback : 'Sedentary Behaviour',  //Will be used in the user feedback 
				nameForLogging : 'Sedentary Behaviour', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'Resting'}, 
					{word : 'Sitting'}, 
					{word : 'Lying Down'}, 
					{word : 'Chair'}, 
					{word : 'Couch'}]
			}
		],

		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{image : 'ampchair.jpg'}, {image : 'amplamp.jpg'}, {image : 'ampumbrella.jpg'}]
		},

		base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/ampImages'
		}
	});
});
