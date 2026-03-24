define(['pipAPI', 'https://dphipps980.github.io/SC-IAT-in-JsPsych/Other%20Experiments/AMP/qamp_Finn_Touch.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();

	return ampExtension({
		primeDuration : 75,
		primeCats : [
			{
				nameForFeedback : 'Vaping',
				nameForLogging : 'vaping',
				mediaArray : [
					{image : 'Vape1.png'},
					{image : 'Vape2.png'},
					{image : 'Vape3.png'},
					{image : 'Vape4.png'},
					{image : 'Vape5.png'}
				]
			},
			{
				nameForFeedback : 'Nicotine Pouches',
				nameForLogging : 'pouches',
				mediaArray : [
					{image : 'Pouch1.png'},
					{image : 'Pouch2.png'},
					{image : 'Pouch3.png'},
					{image : 'Pouch4.png'},
					{image : 'Pouch5.png'}
				]
			},
			{
				nameForFeedback : 'Cigarettes',
				nameForLogging : 'cigarettes',
				mediaArray : [
					{image : 'Cig1.png'},
					{image : 'Cig2.png'},
					{image : 'Cig3.png'},
					{image : 'Cig4.png'},
					{image : 'Cig5.png'}
				]
			},
			{
				nameForFeedback : 'Neutral',
				nameForLogging : 'neutral',
				mediaArray : [
					{image : 'Neutral1.png'}
				]
			}
		],

		examplePrimeStimulus : {
			nameForLogging : 'examplePrime',
			mediaArray : [{image : 'ampchair.jpg'}, {image : 'amplamp.jpg'}, {image : 'ampumbrella.jpg'}]
		},

		base_url : {
			image : 'https://dphipps980.github.io/SC-IAT-in-JsPsych/Other%20Experiments/AMP/Stimuli/'
		}
	});
});
