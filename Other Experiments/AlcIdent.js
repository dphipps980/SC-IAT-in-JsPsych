define(['pipAPI', 'https://dphipps980.github.io/SC-IAT-in-JsPsych/jsPsych/IATAPI.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Drinker', //Will appear in the data.
			title : {
				media : {word : 'Drinker'}, //Name of the category presented in the task.
				css : {color:'#000000','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {word: 'drinker'},{word: 'partier'},{word: 'drunk'},{word: 'drink'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#000000','font-size':'2em'}
		},	
		category2 :	{
			name : 'Non-drinker', //Will appear in the data.
			title : {
				media : {word : 'Non-drinker'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {word: 'non-drinker'},{word: 'abstainer'},{word: 'sober'},{word: 'abstain'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		attribute1 :
		{
			name : 'Not me',
			title : {
				media : {word : 'Not me'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'they'},
				{word: 'them'},
				{word: 'other'},
				{word: 'theirs'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :
		{
			name : 'Me',
			title : {
				media : {word : 'Me'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'me'},
				{word: 'mine'},
				{word: 'my'},
				{word: 'self'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/'
		} 
	});
});
