# StorylineCoding - Sharepoint API

## How to get current user data:

It is possible to get different types of data from Sharepoint via API.
All we have to do is to referance the correct JS files and use the right requet.
You can run this JS code directley one ypur Sahrepoint page via embed code feature:

```html
<!-- 
    This is working from same Sharepoint domain:
-->
<script src="/_layouts/15/SP.Runtime.js" type="text/javascript"></script>
<script src="/_layouts/15/SP.js" type="text/javascript"></script>

<script type="text/javascript">
  ExecuteOrDelayUntilScriptLoaded(GetCurrentUserInfo, "sp.js");
function GetCurrentUserInfo() {
  var cx = new SP.ClientContext.get_current();
  currentUser = cx.get_web().get_currentUser();
  cx.load(currentUser);
  cx.executeQueryAsync(
    Function.createDelegate(this, this.onSucceeded),
    Function.createDelegate(this, this.onFailed)
  );
}

function onSucceeded() {
  userDetails.email = currentUser.get_loginName().split("|")[
    currentUser.get_loginName().split("|").length - 1];
  userDetails.FullName = currentUser.get_loginName();
  //console.log(userDetails);
}

function onFailed(sender, args) {
  console.log(
    "Error: " + args.get_message() + "\nStackTrace: " + args.get_stackTrace()
  );
}
</script>
```

If you don't have the ability to customize the page you can load it programically:

```javascript
function loadSCRIPT(src) {
  var arr = src.split("/");
  var last_item = arr.length - 1;
  var file_name = arr[last_item];
  var script = document.createElement("script");
  script.onload = function () {
    console.log("Script: " + file_name + " loaded and ready");
    //player.SetVar("JQUERY", true);
  };

  script.src = src;
  document.getElementsByTagName("head")[0].appendChild(script);
}

function GetCurrentUserInfo() {
  var cx = new SP.ClientContext.get_current();
  currentUser = cx.get_web().get_currentUser();
  cx.load(currentUser);
  cx.executeQueryAsync(
    Function.createDelegate(this, this.onSucceeded),
    Function.createDelegate(this, this.onFailed)
  );
}

function onSucceeded() {
  userDetails.email = currentUser.get_loginName().split("|")[
    currentUser.get_loginName().split("|").length - 1];
  userDetails.FullName = currentUser.get_loginName();
  //console.log(userDetails);
}

function onFailed(sender, args) {
  console.log(
    "Error: " + args.get_message() + "\nStackTrace: " + args.get_stackTrace()
  );
}
/* Test your function: */
var currentUser;
var userDetails = {};
var src = "/_layouts/15/SP.js";
loadSCRIPT(src);
src = "/_layouts/15/SP.Runtime.js";
loadSCRIPT(src);
ExecuteOrDelayUntilScriptLoaded(GetCurrentUserInfo, "sp.js");

```
