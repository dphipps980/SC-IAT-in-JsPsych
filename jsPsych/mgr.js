define(['managerAPI'], function(Manager){
    var API = new Manager();
	var timeUrl = 'https://app-prod-03.implicit.harvard.edu/implicit/common/all/js/pip/0.3/dist/js/';
    API.addSettings('logger',{type:'csv', url:'csv.php'});
	


  API.addSequence([
    /* The random mixer */
    {
      mixer: 'wrapper',
      data: [
		
        {
            type: 'message',
            keys: ' ',
            template:'Hello World (please click space to proceed)'
        },
		{ // page begins
            header: 'Text questions',
            questions: [
                { // question begins
                    type: 'textNumber',
					name: 'SN',
                    stem: 'What is your student number?',
                    required: true,
                    errorMsg: {
                        required: 'This question is truly important to us, please take your time to answer.'
                    }

                } // question ends
            ]
        },
        {
            name:'AMP',
            type:'time', 
            scriptUrl:'amp.js',
        },
		{
          mixer: 'random',
          data: [
			{
            name:'my-stiat',
            type:'time', 
            scriptUrl:'PA-STIAT.js',
			},
			{
            type: 'message',
            keys: ' ',
            template:'Hello World (please click space to proceed)'
			}
			]
		},
		
		{ type:'postCsv', load: console.log },
		{
		type:'redirect',
		url: 'https://www.google.com/q?<%=current.questions.SN.response%>'
		}
	]}])

    return API.script;
});