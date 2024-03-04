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
			{image : 'Monster.jpeg'},
			{image : 'Mother.jpg'},
			{image : 'Redbull.jpg'},
			{image : 'RedBullSF.jpeg'},
            {image : 'Rockstar.jpg'},
            {image : 'V.jpeg'},
            {image : 'V2.jpg'}
		    ], 
		    //Stimulus css (style)
		    css : {color:'#31b404','font-size':'3em'}
		  },	

  		attribute1 : 
			{
			name : 'Unpleasant', //Attribute label
			title : {
				media : {word : 'Negative'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word : 'Abuse'},
				{word : 'Sadness'},
				{word : 'Pain'},
				{word : 'Poison'},
				{word : 'Grief'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},
		attribute2 : 
			{
			name : 'Pleasant', //Attribute label
			title : {
				media : {word : 'Positive'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'Paradise'},
				{word: 'Pleasure'},
				{word: 'Cheer'},
				{word: 'Wonderful'},
				{word: 'Splendid'},
				{word: 'Love'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},

  base_url : {//Where are your images at?
    image : 'https://dphipps980.github.io/SC-IAT-in-JsPsych/jsPsych/Images/'
  }}
  );
  });
