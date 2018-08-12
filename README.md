# React A11y Workshop 
Instructor: Erin Doyle  
  
Thank you for signing up for the workshop on Building Accessible Web Apps with React! 
Please read through this entire document and follow the steps to get set up. Please complete each step *before* the workshop starts to ensure that you are ready to go from the start!  

## Contents
1. [Set up the Dev Environment](#1.-dev-env-setup)
2. [Clone and Run the Test Application](#2.-clone-and-run-the-test-application)
3. [Pre-Class Resources](#3.-pre-class-resources)


## 1. Dev Env Setup

Please follow the steps to get your machine set up **_before Friday Sept 7th_** to ensure that you're ready to code from the start.

_A laptop is required to attend this workshop.  It's suggested that you also bring a pair of headphones for listening to 
the screen reader that we'll be using frequently for testing._  

### Step 1
Please ensure that your machine has the following core tools installed:

* [Git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en/) v8.0 or higher
    * NVM is the easiest way to manage Node. [Its setup instructions
    here](https://github.com/creationix/nvm#installation). Then run `nvm install
node && nvm alias default node`, which installs the latest version of Node.js
and sets up your terminal so you can run it by typing `node`. With nvm you can
install multiple versions of Node.js and easily switch between them.
    * New to [npm](https://docs.npmjs.com/)?
* An editor of your choice that you are comfortable using

### Step 2
When you've verified that your machine has the above requirements, install the following tools: 
  
* aXe browser plugin:
    * Chrome: https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd
    * Firefox: https://addons.mozilla.org/en-us/firefox/addon/axe-devtools/
* tota11y browser plugin:
    * Chrome: https://chrome.google.com/webstore/detail/tota11y-plugin-from-khan/oedofneiplgibimfkccchnimiadcmhpe?hl=en
    * Firefox: https://addons.mozilla.org/en-US/firefox/addon/tota11y-accessibility-toolkit/
* NoCoffee browser plugin:
    * Chrome: https://chrome.google.com/webstore/detail/nocoffee/jjeeggmbnhckmgdhmgdckeigabjfbddl
* High Contrast Mode:
    * Mac - High Contrast browser plugin:
        * Chrome: https://chrome.google.com/webstore/detail/high-contrast/djcfdncoelnlbldjfhinnjlhdjlikmph
    * Windows - High Contrast Mode:
        * See here for how to enable: https://support.microsoft.com/en-us/help/13862/windows-use-high-contrast-mode
* Screen Reader:
    * Mac - VoiceOver:
        * See here for how to use and familiarize yourself with: https://help.apple.com/voiceover/info/guide/10.11/
    * Windows - NVDA:
        * Download: https://www.nvaccess.org/download/
        * See here for how to use and familiarize yourself with: https://www.nvaccess.org/files/nvda/documentation/userGuide.html?

### Step 3: Bonus 
If you are using a Mac and would like to also be able to test Windows-only based tools such as the NVDA screen reader,
High Contrast Mode, and IE or Edge browsers then you can do so by setting up a Windows Virtual Machine on your Mac.
See here for step by step instructions: [How to Set Up a Windows VM](docs/VM_SETUP.md)


## 2. Clone and run the test application
1. Clone this project
2. Run by entering: `npm run start`
3. Open `http://localhost:3000` in a browser

_**NOTE:** the HEAD revision of the master branch contains the fully completed workshop source.  We will be checking out
various revision tags to step through the evolution of improving this code with the first being completely inaccessible and 
ending with a version that has all accessibility findings resolved._


## 3. Pre-class Resources

Please review the following materials to help you better prepare for the workshop:

### Accessibility
Here are some short videos that may be helpful to watch that we probably won't have time to watch during the workshop and will help us hit the ground running:
* [Perspective Videos](https://www.w3.org/WAI/perspective-videos)
* [Screen Reader Basics: VoiceOver](https://youtu.be/5R-6WvAihms)
* [Screen Reader Basics: NVDA](https://youtu.be/Jao3s_CwdRU)


### ES6
If you're not familiar with ES6, you'll want to start here. Read one or both.  
* [ES6 Interactive Guide](http://stack.formidable.com/es6-interactive-guide/#/)
* [ES6 Guide](https://mrzepinski.gitbooks.io/es6-guide/content/). Only sections 1-5 recommended.

### React Foundations
If you're not comfortable with React, you should read through the following resources:  
* [Thinking in react](https://facebook.github.io/react/docs/thinking-in-react.html)
* [9 things every react beginner should know](https://camjackson.net/post/9-things-every-reactjs-beginner-should-know)
* [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
  