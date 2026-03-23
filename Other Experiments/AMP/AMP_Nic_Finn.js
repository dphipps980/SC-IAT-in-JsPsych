define(['pipAPI', 'https://dphipps980.github.io/SC-IAT-in-JsPsych/Other%20Experiments/AMP/qamp_Finn_Desktop.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();

	var baseStimuli = 'https://dphipps980.github.io/SC-IAT-in-JsPsych/Other%20Experiments/AMP/Stimuli/';

	return ampExtension({
		primeCats : [
			{
				nameForFeedback : 'Vaping',
				nameForLogging : 'vaping',
				mediaArray : [
					{image : baseStimuli + 'Vape1.png'},
					{image : baseStimuli + 'Vape2.png'},
					{image : baseStimuli + 'Vape3.png'},
					{image : baseStimuli + 'Vape4.png'},
					{image : baseStimuli + 'Vape5.png'}
				]
			},
			{
				nameForFeedback : 'Nicotine Pouches',
				nameForLogging : 'pouches',
				mediaArray : [
					{image : baseStimuli + 'Pouch1.png'},
					{image : baseStimuli + 'Pouch2.png'},
					{image : baseStimuli + 'Pouch3.png'},
					{image : baseStimuli + 'Pouch4.png'},
					{image : baseStimuli + 'Pouch5.png'}
				]
			},
			{
				nameForFeedback : 'Cigarettes',
				nameForLogging : 'cigarettes',
				mediaArray : [
					{image : baseStimuli + 'Cig1.png'},
					{image : baseStimuli + 'Cig2.png'},
					{image : baseStimuli + 'Cig3.png'},
					{image : baseStimuli + 'Cig4.png'},
					{image : baseStimuli + 'Cig5.png'}
				]
			},
			{
				nameForFeedback : 'Neutral',
				nameForLogging : 'neutral',
				mediaArray : [
					{image : baseStimuli + 'Neutral1.png'}
				]
			}
		],

		examplePrimeStimulus : {
			nameForLogging : 'examplePrime',
			mediaArray : [{image : 'ampchair.jpg'}, {image : 'amplamp.jpg'}, {image : 'ampumbrella.jpg'}]
		},

		base_url : {
			image : 'https://baranan.github.io/minno-tasks/images/ampImages'
		}
	});
});
