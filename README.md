# SC-IAT-in-JsPsych
<a href="https://zenodo.org/badge/latestdoi/295320913"><img src="https://zenodo.org/badge/295320913.svg" alt="DOI"></a>


An example of an single catagory Implicit association test (SC-IAT) in Js-Psych 5 based on other examples posted previously by Nathan Parkin in Google groups here: https://groups.google.com/g/jspsych/c/3-YrE1upPqM/m/qXE5OCLXAQAJ

The experiment posted here has several additions:

1. Instructions have been translated into English
2. The code checks for mobile devices, and only runs on computers. 
3. The code includes a box for participants to provide a subject ID, and provides participants with a random ID if they do not provide an ID of their own
4. The code includes a randomiser to push participants to different versions of the IAT. This can be used for counterbalancing presentation orders, or as in the example experiment, randomising the presentation order of two SC-IATs.



How to Run
1. Change references in HTML files from "YOURSERVER" to your actual server name, then upload all the files to the public directory of the server (Note the server must allow for PHP and Javascript. E.g. Byethost.)
2. Create a folder in the public directory called "data"
3. Give the newly created "data" folder and the iatphp.php file full read, write, and executive permissions (777).
4. To run the experiment, open the link www.yourserver.com/Device.html Data will save into the folder called data.
5. Upon completion, a tab will open with google searching whatever you put as your subject ID. In the code google can be replaced with a link to Qualtrics or Limesurvey to carry over subject ID into a survey. 


The example experiment will completes the following steps:
1. Check for mobile devices and screen out
2. Ask for a subject ID
3. Present information, e.g. ethics approvals, welcome etc.
4. Randomise participants to recieve one of two SC-IATs
5. Redirect participants to the other SC-IAT once they have completed the first one, while retaining the original subject ID
6. Redirect participants to another website after ending, with the ability to retain the original subject ID. 
