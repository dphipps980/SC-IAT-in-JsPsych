define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/amp/qualtrics/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'Sugar',  //Will be used in the user feedback 
				nameForLogging : 'Sugar', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'Lollies'}, 
				    {word : 'Chocolate'}, 
				    {word : 'Ice cream'}, 
				    {word : 'Cake'}, 
				    {word : 'Coke'}, 
				    {word : 'Candy'}, 
				    {word : 'Soft-drink'}, 
				{word : 'Sweets'}]

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
					{word : 'Vegetables'},
					{word : 'Lettuce'},
					{word : 'Salad'},
					{word : 'Broccoli'}]
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
