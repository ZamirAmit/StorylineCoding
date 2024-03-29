# StorylineCoding

## How to comunicate with player scope variables:
Javascript can manipulate Storyline variables very easily. you just need to create a trigger
Fractal nodes in Mixture:
![image](create-trigger.png)

and run simple code:
```javascript
// Calling the Player:
var player = GetPlayer();
// Get variable fom player:
storyline_variable = player.GetVar("storyline_variable");
// Set variable inside player:
var number = 0;
player.SetVar("number", number);
// To create total comunication between variables you should the window SCOPE:
window.storyline_variable = player.GetVar("storyline_variable");
```

## How to load external JS file programmincally:
To be able to use external JS files you should load the script into the HTML page head:
```javascript
function loadSCRIPT(src) {
  var arr = src.split("/");
  var last_item = arr.length - 1;
  var file_name = arr[last_item];
  var script = document.createElement("script");
  script.onload = function () {
    console.log("Script: " + file_name + " loaded and ready");
    player.SetVar("JQUERY", true);
  };
  script.src = src;
  document.getElementsByTagName("head")[0].appendChild(script);
}
/* Test your function: */
 var player = GetPlayer();
 var src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"; //player.GetVar("src");
 loadSCRIPT(src);
```

This is an example file: [LoadScript.story](LoadScript.story)

## How to create a Timer using JS:
Javascript can create a Timer feature using the Interval method.
You can learn about it on w3schools webiste in [here](https://www.w3schools.com/jsref/met_win_setinterval.asp).
Here is a simple code for creating timer using JS:
### procedure:
1. Create a timer text vaiable inside storyline
2. Set it to your time limit like this "09:35" (for example)
3. Create an Execute JS trigger
4. Paste this code inside:
```javascript

// This function activates the Interavl method:
function initTimer() {
    if (window.SetTimer) {
        clearInterval(window.SetTimer);
        window.SetTimer = null;
    }
    var timer = player.GetVar("timer");
    ActivateTimer(timer);
}

// This function runs inside the Interval method.
// The function Gets Storyline timer variable and converting it into working timer:

function ActivateTimer(timer) {
    minutes_durration = timer.split(":")[0];
    seconds_durration = timer.split(":")[1];
    var distance = minutes_durration * 60 + parseInt(seconds_durration);

    if (!isNaN(distance)) {
        {
            window.SetTimer = setInterval(function() {

                // Time calculations for days, hours, minutes and seconds
                var remain_minutes = Math.floor(distance / 60);
                var remain_seconds = Math.floor(distance - remain_minutes * 60);
                remain_seconds = remain_seconds.toString().padStart(2, "0");
                remain_minutes = remain_minutes.toString().padStart(2, "0");

                // Output the result in an element with id="demo"
                remain_time = remain_minutes + ":" + remain_seconds;
                player.SetVar("timer", remain_time);
                distance--;
                // If the count down is over, write some text 
                if (distance < 0) {

                    player.SetVar("timer", "");
                    clearInterval(window.SetTimer);
                    window.SetTimer = false;
                    //console.log(timer);

                }
                if (player.GetVar("time_to_stop")) {
                    clearInterval(window.SetTimer);
                    window.SetTimer = false;
                }


            }, 1000);

        }
    }
}

// Test youe code:
var player = GetPlayer();
initTimer();
```

[![Discord](https://img.shields.io/discord/823720615965622323.svg?style=for-the-badge)](https://discord.gg/DGxZRP3qeg)
[![openupm](https://img.shields.io/npm/v/com.alelievr.mixture?label=openupm&registry_uri=https://package.openupm.com&style=for-the-badge)](https://openupm.com/packages/com.alelievr.mixture/)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](https://github.com/alelievr/Mixture/blob/master/LICENSE)
[![Documentation](https://img.shields.io/badge/Documentation-github-brightgreen.svg?style=for-the-badge)](https://alelievr.github.io/Mixture/manual/GettingStarted.html)

Mixture is a powerful node-based tool crafted in unity to generate all kinds of textures in realtime. Mixture is very flexible, easily customizable through [ShaderGraph](https://unity.com/shader-graph) and a simple C# API, fast with it's GPU based workflow and compatible with all the render pipelines thanks to the new [Custom Render Texture](https://docs.unity3d.com/2020.2/Documentation/ScriptReference/CustomRenderTextureManager.html) API.

![](Packages/com.alelievr.mixture/Documentation~/Images/2020-11-04-01-04-59.png)

# Getting Started

## Installation

You need at least a Unity 2020.2 beta to be able to use Mixture and if you are using a render pipeline like URP or HDRP, make sure to use the version 10.1.0 or above.

<details><summary>Instructions</summary>

Mixture is available on the [OpenUPM](https://openupm.com/packages/com.alelievr.mixture/) package registry, to install it in your project, follow the instructions below.

1. Open the `Project Settings` and go to the `Package Manager` tab.
2. In the `Scoped Registry` section, click on the small `+` icon to add a new [scoped registry](https://docs.unity3d.com/2020.2/Documentation/Manual/upm-scoped.html) and fill the following information:

```
Name:     Open UPM
URL:      https://package.openupm.com
Scope(s): com.alelievr
```

3. Then below the scoped registries, you need to enable `Preview Packages` (Mixture is still in preview).
4. Next, open the `Package Manager` window, select `My Registries` in the top left corner and you should be able to see the Mixture package.
5. Click the `Install` button and you can start using Mixture :)

![](docs/docfx/images/2020-11-09-11-37-01.png)

:warning: If you don't see `My Registries` in the dropdown for some reason, click on the `+` icon in the top left corner of the package manager window and select `Add package from Git URL`, then paste `com.alelievr.mixture` and click `Add`.

Note that sometimes, the package manager can be slow to update the list of available packages. In that case, you can force it by clicking the circular arrow button at the bottom of the package list.

</details>

## Documentation

Here are some useful documentation links:

- Getting started guide: https://alelievr.github.io/Mixture/manual/GettingStarted.html
- Node library: https://alelievr.github.io/Mixture/manual/nodes/NodeLibraryIndex.html
- Mixture graph examples: https://alelievr.github.io/Mixture/manual/Examples.html
- Known issues: https://alelievr.github.io/Mixture/manual/KnownIssues.html

## Roadmap

The roadmap is available on Trello: https://trello.com/b/2JiH2Vsp/mixture. If you have a Trello account, you can vote on cards to prioritize a feature.

# Community

## Discord

Join the [Mixture Discord](https://discord.gg/DGxZRP3qeg)!

## Feedback

To give feedback, ask a question or make a feature request, you can either use the [Github Discussions](https://github.com/alelievr/Mixture/discussions) or the [Discord server](https://discord.gg/DGxZRP3qeg).

Bugs are logged using the github issue system. To report a bug, simply [open a new issue](https://github.com/alelievr/Mixture/issues/new/choose).

## Contributions

All contributions are welcomed.

For new nodes, check out [this documentation page on how to create a new shader-based node](https://alelievr.github.io/Mixture/manual/ShaderNodes.html). Once you have it working, prepare a pull request against this repository.  
In case you have any questions about a feature you want to develop of something you're not sure how to do, you can still create a draft pull request to discuss the implementation details.

# Gallery / Cool things

You can open a Mixture graph just by double clicking any texture field in the inspector with a Mixture assigned to it.
![](docs/docfx/images/MixtureOpen.gif)

[Surface Gradient](https://blogs.unity3d.com/2019/11/20/normal-map-compositing-using-the-surface-gradient-framework-in-shader-graph/) powered normal map operations.
![](docs/docfx/images/NormalBlend.gif)

Extract buffers (depth, normal, color or position) from the rendering of a prefab and use it directly in the graph (HDRP Only).
![](docs/docfx/images/SceneCapture.gif)

Fractal nodes in Mixture:
![image](https://user-images.githubusercontent.com/6877923/102915300-d8944e00-4481-11eb-8e93-f7a57c21b830.png)

Mixture Variants:

https://user-images.githubusercontent.com/6877923/115474571-03c75800-a23e-11eb-8096-8973aad5fa9f.mp4

Earth Heightmap node:

https://user-images.githubusercontent.com/6877923/123006036-64e2e780-d3b7-11eb-922e-018994b32da5.mov
