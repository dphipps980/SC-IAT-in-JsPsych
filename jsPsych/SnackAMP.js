define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/amp/qualtrics/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'Snacks',  //Will be used in the user feedback 
				nameForLogging : 'Snacks', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'Chocolate'}, 
					{word : 'Chips'}, 
					{word : 'Biscuits'}, 
                    {word : 'Lollies'}, 
					{word : 'Cake'}]

			}, 
			{
				nameForFeedback : 'Fruit',  //Will be used in the user feedback 
				nameForLogging : 'Fruit', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'Banana'}, 
					{word : 'Apple'}, 
					{word : 'Strawberry'}, 
                    {word : 'Mango'}, 
					{word : 'Oranges'}]
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
