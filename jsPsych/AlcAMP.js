define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/amp/qualtrics/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'Alcohol',  //Will be used in the user feedback 
				nameForLogging : 'Alcohol', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'https://dphipps980.github.io/SC-IAT-in-JsPsych/jsPsych/Images/Alc1.jpg'}, 
					{image : 'https://dphipps980.github.io/SC-IAT-in-JsPsych/jsPsych/Images/Alc2.jpg'}, 
					{image : 'https://dphipps980.github.io/SC-IAT-in-JsPsych/jsPsych/Images/Alc3.jpg'}, 
                    {image : 'https://dphipps980.github.io/SC-IAT-in-JsPsych/jsPsych/Images/Alc4.jpg'}, 
					{image : 'https://dphipps980.github.io/SC-IAT-in-JsPsych/jsPsych/Images/Alc5.jpg'}]

			}, 
			{
				nameForFeedback : 'Water',  //Will be used in the user feedback 
				nameForLogging : 'Water', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'https://dphipps980.github.io/SC-IAT-in-JsPsych/jsPsych/Images/Water1.jpg'}, 
					{image : 'https://dphipps980.github.io/SC-IAT-in-JsPsych/jsPsych/Images/Water2.jpg'}, 
					{image : 'https://dphipps980.github.io/SC-IAT-in-JsPsych/jsPsych/Images/Water3.jpg'}, 
                    {image : 'https://dphipps980.github.io/SC-IAT-in-JsPsych/jsPsych/Images/Water4.jpg'}, 
					{image : 'https://dphipps980.github.io/SC-IAT-in-JsPsych/jsPsych/Images/Water5.jpg'}]
			}
		],

		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{image : 'ampchair.jpg'}, {image : 'amplamp.jpg'}, {image : 'ampumbrella.jpg'}]
		},

		}
	});
});
