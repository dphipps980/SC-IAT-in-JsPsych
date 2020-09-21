jsPsych.plugins["keen-ping"] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'keen-ping',
    description: '',
    parameters: {
      loader_image: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'image',
        default: undefined,
        description: 'The HTML string to be displayed'
      },
      stream_name: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'stream',
        default: undefined,
        description: ''
      },
      project_id: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'project_id',
        default: undefined,
        description: ''
      },
      write_key: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'write_key',
        default: undefined,
        description: ''
      },
      choices: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        array: true,
        pretty_name: 'Choices',
        default: jsPsych.ALL_KEYS,
        description: 'The keys the subject is allowed to press to continue.'
      },
    }
  }

  plugin.trial = function(display_element, trial) {

    var new_html = '<div id="jspsych-html-keyboard-response-stimulus"><img src="'+trial.loader_image+'"></div>';

    KeenAsync.ready(function(){
      var client = new KeenAsync({
        projectId: trial.project_id,
        writeKey:  trial.write_key
        });

      client.recordEvent(
        trial.stream_name,
        {
            connection: true
        },
        function(err, res){
          if (err) {
            new_html =
            '<div id="jspsych-html-keyboard-response-stimulus">' +
              'Could not establish a connection to our servers.<br />' +
              'Please disable your ad blocker and refresh this page.' +
            '</div>';
            display_element.innerHTML = new_html;
          }
          else {
            new_html = '<div id="jspsych-html-keyboard-response-stimulus">Connection established to our servers.<br /> Press any key to continue.</div>';
            display_element.innerHTML = new_html;

            if (trial.choices != jsPsych.NO_KEYS) {
              var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
                callback_function: after_response,
                valid_responses: trial.choices,
                rt_method: 'date',
                persist: false,
                allow_held_key: false
              });
            }
          };
        }
      );
    });
    
    // draw
    display_element.innerHTML = new_html;

    // store response
    var response = {
      rt: null,
      key: null
    };

    // function to end trial when it is time
    var end_trial = function() {

      // kill any remaining setTimeout handlers
      jsPsych.pluginAPI.clearAllTimeouts();

      // kill keyboard listeners
      if (typeof keyboardListener !== 'undefined') {
        jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
      }

      // gather the data to store for the trial
      var trial_data = {
      };

      // clear the display
      display_element.innerHTML = '';

      // move on to the next trial
      jsPsych.finishTrial(trial_data);
    };

    // function to handle responses by the subject
    var after_response = function(info) {

      // after a valid response, the stimulus will have the CSS class 'responded'
      // which can be used to provide visual feedback that a response was recorded
      display_element.querySelector('#jspsych-html-keyboard-response-stimulus').className += ' responded';

      // only record the first response
      if (response.key == null) {
        response = info;
      }

      end_trial();

    };

    // start the response listener
  };

  return plugin;
})();
