define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/stiat/qualtrics/qstiat6.js'], function(APIConstructor, stiatExtension){
	
	var API = new APIConstructor();
		  return stiatExtension({
		  category : { 
		    name : 'Energy Drinks', //Will appear in the data.
		    title : {
		      media : {word : 'Energy Drinks'}, //Name of the category presented in the task.
		      css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
		      height : 7 //Used to position the "Or" in the combined block.
		    }, 
			media : [ //Stimuli
			{image : 'Monster.png'},
			{image : 'Mother.png'},
			{image : 'Redbull.png'},
			{image : 'RedbullSF.png'},
            {image : 'Rockstar.png'},
            {image : 'V.png'},
            {image : 'V2.png'}
		    ], 
		    //Stimulus css (style)
		    css : {color:'#31b404','font-size':'3em'}
		  },	

  		attribute1 : 
			{
			name : 'Inactive', //Attribute label
			title : {
				media : {word : 'Inactive'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word : 'Idle'},
				{word : 'Tired'},
				{word : 'Distracted'},
				{word : 'Ineffective'},
				{word : 'Slow'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},
		attribute2 : 
			{
			name : 'Active', //Attribute label
			title : {
				media : {word : 'Active'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'Active'},
				{word: 'Energetic'},
				{word: 'Focused'},
				{word: 'Performance'},
				{word: 'Fast'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},

  base_url : {//Where are your images at?
    image : 'https://dphipps980.github.io/SC-IAT-in-JsPsych/jsPsych/Images/'
  }}
  );
  });
