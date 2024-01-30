define(['pipAPI', 'https://dphipps980.github.io/SC-IAT-in-JsPsych/jsPsych/IATAPITouch.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Physical Activity', //Will appear in the data.
			title : {
				media : {word : 'Physical Activity'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {word: 'running'},{word: 'exercise'},{word: 'workout'},{word: 'jogging'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Sedentary', //Will appear in the data.
			title : {
				media : {word : 'Sedentary'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {word: 'sitting'},{word: 'tv'},{word: 'couch'},{word: 'lying down'}			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

		base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/'
		} 
	});
});
