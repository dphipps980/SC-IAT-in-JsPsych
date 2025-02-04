define(['pipAPI', 'https://dphipps980.github.io/SC-IAT-in-JsPsych/Other%20Experiments/AMP/qamp_Finn_Desktop.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'Physical Activity',  //Will be used in the user feedback 
				nameForLogging : 'Physical Activity', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'Liikunta'}, 
					{word : 'juoksu'}, 
					{word : 'Treeni'}, 
					{word : 'Fyysinen aktiivisuus'}, 
					{word : 'Urheilu'}, 
					{word : 'Liikkuminen'}, 
					{word : 'Aktiivinen'}]

			}, 
			{
				nameForFeedback : 'Sedentary Behaviour',  //Will be used in the user feedback 
				nameForLogging : 'Sedentary Behaviour', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'Makoilu'}, 
					{word : 'Lepääminen'}, 
					{word : 'Istuminen'}, 
					{word : 'Tuoli'},
					{word : 'Sohva'},
					{word : 'makaaminen'}]
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
