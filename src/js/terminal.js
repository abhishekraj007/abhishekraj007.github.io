$(function () {
  // start of document.ready
  "use strict";

  /**
   * My Intro Implementation
   */

  var initDot = document.getElementById("loading");
  var loading = setInterval(function () {
    if (initDot.innerHTML.length === 5) {
      initDot.innerHTML = "";
    } else {
      initDot.innerHTML += ".";
    }
  }, 1000); // Dot Speed

  var $installingResume = $('#installingResume');

  setTimeout(function () {
    clearInterval(loading);
    $installingResume.hide();
  }, 5000);

  var initProgram = function () {
    setTimeout(function () {
      var $greeting = "=== O_O A Stranger DETECTED!! ===";
      // var $message = "Installing Introduction Protocol (IIP) for Strangers";
      var $message = "npm install abhishek-resume";
      var $showResumeString = "show-resume";
      var $identityDiv = $("#identity-results");
      var $name = "Name: Abhishek Raj (aka: akrj)";
      var $education = "Education: B.Tech in Computer Science";
      var $occupation = "Occupation: Front End Engineering | UI Developement";
      var $frontEnd = "Front End Core: HTML5 | CSS3 | Javascript";
      var $JSFrameworks = "JS Frameworks: React | Meteor";
      var $JSLibs = "JS Libraries: jQuery | D3 | Underscore";
      var $CSSFrameworks = "CSS Expertise: BEM | Bootstrap4 | Semantic UI | MaterialDesign | SASS";
      var $branding = "Illustration & Branding: Illustrator | Photoshop CC";
      var $hobby = "Hobby: Cycling, Spending time with pets and books";
      var $askName = "What is your name?";


      function initIdentityResults(i) {
        $("#message").addClass("sign cursor").text($message.substring(0, i));
        if (i < $message.length) {
          setTimeout(function () {
            initIdentityResults(i + 1);
          }, 100);
        } else {
          $('#message').removeClass("cursor");
          // Resume Installer
          var installingResume = function () {
            $("#installingResume").show();
            var dotAlpha = document.getElementById("installer-loader");
            var loadingAlpha = setInterval(function () {
              if (dotAlpha.innerHTML.length === 14) {
                clearInterval(loadingAlpha);
                $("#installingResume").hide();
                loadingResume();
                // console.log('Load Resume !');
              } else {
                dotAlpha.innerHTML += ".";
              }
            }, 300);  // Dot Speed
          }
          // Resume loader
          var loadingResume = function () {
            $("#loadingResume").show();
            var dotResumeLoader = document.getElementById("resume-loader");
            var loadingResumeLoader = setInterval(function () {
              if (dotResumeLoader.innerHTML.length == 5) {
                clearInterval(loadingResumeLoader);
                $('#loadingResume').hide();
                $('#addedPackage').show();
              } else {
                dotResumeLoader.innerHTML += ".";
              }
            }, 300);  // Dot Speed
          }
          installingResume();
          function showResume(i) {
            $("#showResume").addClass("sign cursor").text($showResumeString.substring(0, i));
            if (i < $showResumeString.length) {
              setTimeout(function () {
                showResume(i + 1);
              }, 35);
            } else {
              $("#showResume").removeClass("cursor");
              setTimeout(function () {
                initName(0);
              }, 1500);
            }
          }
          setTimeout(function () {
            showResume(0);
          }, 6500);
        }

        function initName(i) {
          $("#name").addClass("cursor").text($name.substring(0, i));
          if (i < $name.length) {
            setTimeout(function () {
              initName(i + 1);
            }, 10);
          } else {
            $("#name").removeClass("cursor");
            setTimeout(function () {
              initEducation(0);
            }, 1000);
          }
        }
        function initEducation(i) {
          $("#education").addClass("cursor").text($education.substring(0, i));
          if (i < $education.length) {
            setTimeout(function () {
              initEducation(i + 1);
            }, 10);
          } else {
            $("#education").removeClass("cursor");
            setTimeout(function () {
              initOccupation(0);
            }, 1000);
          }
        }
        function initOccupation(i) {
          $("#occupation").addClass("cursor").text($occupation.substring(0, i));
          if (i < $occupation.length) {
            setTimeout(function () {
              initOccupation(i + 1);
            }, 10);
          } else {
            $("#occupation").removeClass("cursor");
            setTimeout(function () {
              initFrontEnd(0);
            }, 1000);
          }
        }
        function initFrontEnd(i) {
          // $('#front-end-span').addClass('fa fa-wrench');
          $('#front-end').addClass("cursor").text($frontEnd.substring(0, i));
          if (i < $frontEnd.length) {
            setTimeout(function () {
              initFrontEnd(i + 1);
            }, 10);
          } else {
            $('#front-end').removeClass("cursor");
            setTimeout(function () {
              initJSFrameworks(0);
            }, 1000);
          }
        }
        function initJSFrameworks(i) {
          $('#js-frameworks').addClass("cursor").text($JSFrameworks.substring(0, i));
          if (i < $JSFrameworks.length) {
            setTimeout(function () {
              initJSFrameworks(i + 1);
            }, 10);
          } else {
            $('#js-frameworks').removeClass("cursor");
            setTimeout(function () {
              initJSLibs(0);
            }, 1000);
          }
        }
        function initJSLibs(i) {
          $('#js-libs').addClass("cursor").text($JSLibs.substring(0, i));
          if (i < $JSLibs.length) {
            setTimeout(function () {
              initJSLibs(i + 1);
            }, 10);
          } else {
            $('#js-libs').removeClass("cursor");
            setTimeout(function () {
              initCSSFrameworks(0);
            }, 1000);
          }
        }
        function initCSSFrameworks(i) {
          $('#css-frameworks').addClass("cursor").text($CSSFrameworks.substring(0, i));
          if (i < $CSSFrameworks.length) {
            setTimeout(function () {
              initCSSFrameworks(i + 1);
              updateScroll();
            }, 10);
          } else {
            $('#css-frameworks').removeClass("cursor");
            setTimeout(function () {
              initBranding(0);
              updateScroll();
            }, 1000);
          }
        }
        function initBranding(i) {
          $('#branding').addClass("cursor").text($branding.substring(0, i));
          if (i < $branding.length) {
            setTimeout(function () {
              initBranding(i + 1);
            }, 10);
          } else {
            $('#branding').removeClass("cursor");
            setTimeout(function () {
              updateScroll();
              initHobby(0);
            }, 1000);
          }
        }

        // Last Animation
        function initHobby(i) {
          $('#hobby').addClass("cursor").text($hobby.substring(0, i));
          if (i < $hobby.length) {
            setTimeout(function () {
              initHobby(i + 1);
            }, 10);
          } else {
            $('#hobby').removeClass("cursor");
            setTimeout(function () {
              updateScroll();
              initConversation(0);
              updateScroll();
            }, 1000);
          }
        }
        // Last Animation
        function initConversation(i) {
          $('#askName').addClass("sign cursor").text($askName.substring(0, i));
          if (i < $askName.length) {
            setTimeout(function () {
              initConversation(i + 1);
            }, 60);
          } else {
            $('#askName').removeClass("cursor");
            $('#strangerIntro').show();
            updateScroll();
          }
        }
      }

      // First Animation
      function initProgramAlpha(i) {
        $("#greeting").addClass("cursor").text($greeting.substring(0, i));
        if (i < $greeting.length) {
          setTimeout(function () {
            initProgramAlpha(i + 1);
          }, 50);
        } else {
          $("#greeting").removeClass("cursor");
          setTimeout(function () {
            initIdentityResults(0);
          }, 2000)
        }
      }
      initProgramAlpha(0);

    }, 5000);
  }

  // start my intro programm
  initProgram();

  // End of My Intro programm


  /**
   * Prompt Implementation
   */

  // UTILITY

  function updateScroll() {
    var msgContainer = document.querySelector('.terminal__main');
    msgContainer.scrollTop = msgContainer.scrollHeight;
  }


  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function openInNewTab(url) {
    var a = document.createElement("a");
    a.target = "_blank";
    a.href = url;
    a.click();
  }
  // END UTILITY

  // COMMANDS
  // Clear command
  function clear() {
    terminal.text("");
    $('.default').hide();
  }
  // Help command
  function help() {
    terminal.append("<p>\nHere is the list of command: \n &crarr; show-contact\n &crarr; show-resume\n &crarr; show-portfolio\n &crarr; show-latestwork\n &crarr; clear</p>\n");
  }

  // show contact command
  function showLoadedContact() {
    terminal.append("\n<p>Phone Number: +91-7727826586</p><p>Email: abhishekrajinfo@gmail\n\nYou can also send me message through that little bubble at right bottom corner of this window :) \n\n</p>")
  }

  var resumeContent = "\n<p>Name: Abhishek Raj (aka: akrj)</p>" +
    "<p>Occupation: Front End Engineering | UI Developement</p>" +
    "<p>Education: B.Tech in Computer Science</p>" +
    "<p>Front End Core: HTML5 | CSS3 | Javascript</p>" +
    "<p>JS Frameworks: React | Meteor</p>" +
    "<p>JS Libraries: jQuery | D3 | Underscore</p>" +
    "<p>CSS Expertise: BEM | Bootstrap4 | Semantic UI | MaterialDesign | SASS</p>" +
    "<p>Illustration & Branding: Illustrator | Photoshop CC</p>" +
    "<p>Hobby: Cycling, Spending time with pets and books</p>";

  // show resume command
  function showLoadedResume() {
    terminal.append(resumeContent);
  }
  // show resume command
  function showPortfolio() {
    var url = window.location.href.replace(window.location.pathname, "/portfolio.html")
    openInNewTab(url);
  }
  function showLatestWork() {
    var url = window.location.href.replace(window.location.pathname, "/latest-work.html");
    openInNewTab(url);
  }

  // END COMMANDS

  // var title = $(".title");
  var terminal = $(".terminal-prompt");
  var prompt = "akrj:~$ ";

  var commandHistory = [];
  var historyIndex = 0;

  var command = "";
  var commands = [{
    "name": "clear",
    "function": clear
  }, {
    "name": "help",
    "function": help
  }, {
    "name": "show-contact",
    "function": showLoadedContact
  }, {
    "name": "show-resume",
    "function": showLoadedResume
  }, {
    "name": "show-portfolio",
    "function": showPortfolio
  }, {
    "name": "show-latestwork",
    "function": showLatestWork
  }
  ];



  var isItName = true;

  function processCommand() {
    var isValid = false;

    // Create args list by splitting the command
    // by space characters and then shift off the
    // actual command.

    var args = command.split(" ");
    var cmd = args[0];
    args.shift();

    // Iterate through the available commands to find a match.
    // Then call that command and pass in any arguments.
    for (var i = 0; i < commands.length; i++) {
      if (cmd === commands[i].name) {
        commands[i].function(args);
        isValid = true;
        break;
      }
    }

    // No match was found...
    if (!isValid) {

      if (isItName) {
        terminal.append("\nHi! " + command + ". It's nice to meet you..\n\nTry 'help' to see available command\n\n");
        isItName = false;
      } else {
        terminal.append('<p>"' + command + '" command not found</p>');
      }

    }

    // Add to command history and clean up.
    commandHistory.push(command);
    historyIndex = commandHistory.length;
    command = "";
    updateScroll();
  }

  function displayPrompt() {
    terminal.append("<span class=\"sign\"></span>");
    updateScroll();
  }

  // Delete n number of characters from the end of our output
  function erase(n) {
    command = command.slice(0, -n);
    terminal.html(terminal.html().slice(0, -n));
    updateScroll();
  }

  function clearCommand() {
    if (command.length > 0) {
      erase(command.length);
      updateScroll();
    }
  }

  function appendCommand(str) {
    terminal.append(str);
    command += str;
    updateScroll();
  }

  /*
    //	Keypress doesn't catch special keys,
    //	so we catch the backspace here and
    //	prevent it from navigating to the previous
    //	page. We also handle arrow keys for command history.
    */

  $(document).keydown(function (e) {
    e = e || window.event;
    var keyCode = typeof e.which === "number" ? e.which : e.keyCode;

    // BACKSPACE
    if (keyCode === 8 && e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA") {
      e.preventDefault();
      if (command !== "") {
        erase(1);
      }
    }

    // UP or DOWN
    if (keyCode === 38 || keyCode === 40) {
      // Move up or down the history
      if (keyCode === 38) {
        // UP
        historyIndex--;
        if (historyIndex < 0) {
          historyIndex++;
        }
      } else if (keyCode === 40) {
        // DOWN
        historyIndex++;
        if (historyIndex > commandHistory.length - 1) {
          historyIndex--;
        }
      }

      // Get command
      var cmd = commandHistory[historyIndex];
      if (cmd !== undefined) {
        clearCommand();
        appendCommand(cmd);
      }
    }
  });

  $(document).keypress(function (e) {
    // Make sure we get the right event
    e = e || window.event;
    var keyCode = typeof e.which === "number" ? e.which : e.keyCode;

    // Which key was pressed?
    switch (keyCode) {
      // IF It is enter ENTER
      case 13:
        {
          terminal.append("\n");
          // display info
          processCommand();
          // add prompt
          displayPrompt();
          break;
        }
      default:
        {
          appendCommand(String.fromCharCode(keyCode));
        }
    }
  });

  // Initialize prompt
  displayPrompt();

  // End of document.ready
});


