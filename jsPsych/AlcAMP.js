define(['pipAPI', 'https://dphipps980.github.io/SC-IAT-in-JsPsych/jsPsych/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'Alcohol',  //Will be used in the user feedback 
				nameForLogging : 'Alcohol', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'Alc1.jpg'}, 
					{image : 'Alc2.jpg'}, 
					{image : 'Alc3.jpg'}, 
                    {image : 'Alc4.jpg'}, 
					{image : 'Alc5.jpg'}]

			}, 
			{
				nameForFeedback : 'Water',  //Will be used in the user feedback 
				nameForLogging : 'Water', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'Water1.jpg'}, 
					{image : 'Water2.jpg'}, 
					{image : 'Water3.jpg'}, 
                    {image : 'Water4.jpg'}, 
					{image : 'Water5.jpg'}]
			}
		],

		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{image : 'ampchair.jpg'}, {image : 'amplamp.jpg'}, {image : 'ampumbrella.jpg'}]
		},
		base_url : {//Where are your images at?
		image : 'https://dphipps980.github.io/SC-IAT-in-JsPsych/jsPsych/Images/'
		}
	});
});
