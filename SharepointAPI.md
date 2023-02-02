# StorylineCoding - Sharepoint API

## How to get current user data:

It is possible to get different types of data from Sharepoint via API.
All we have to do is to referance the correct JS files and use the right requet.
You can run this JS code directley one ypur Sahrepoint page via embed code feature:

```html
<!-- 
    This is working from same Sharepoint domain:
-->

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
<script type="text/javascript">

  // Create a function with Promise:
  function GetCurrentUSerDetails(url) {
      return new Promise((resolve, reject) => {
          // Must referance JQUERY:
          $.ajax({
              url: url + "/_api/web/currentuser",
              headers: {
                  Accept: "application/json;odata=verbose"
              },
              async: false,
              success: function (data) {
                  resolve(data)
              },
              error: function (error) {
                  reject(error)
              },
          }) // end of request
      }) // end of Promise
    } // end of function

    // Calling Promise:
    url = "Sharepoint website URL";
  // Calling Promise:
  GetCurrentUSerDetails(url)
      .then((data) => {
          console.log(data)

      })
      .catch((error) => {
          console.log(error)
      });

  });
</script>
```

If you don't have the ability to customize the page you can load it programically:
```javascript
    // Define load script function with Promise:
    function LoadSCcript(src) {
        return new Promise((resolve, reject) => {

            var arr = src.split("/");
            var last_item = arr.length - 1;
            var file_name = arr[last_item];
            var script = document.createElement("script");

            script.src = src;
            document.getElementsByTagName("head")[0].appendChild(script);

            script.onload = function () {
                resolve("Script: " + file_name + " loaded and ready");

            }
            script.onerror = function () {
                reject('Faild to load the script: ' + file_name);

            }

        }) // end of Promise
    } // end of function
    
    // Definne an AJAX call function with Promise:
    function GetCurrentUSerDetails(url) {
        return new Promise((resolve, reject) => {
            // Must referance JQUERY:
            $.ajax({
                url: url + "/_api/web/currentuser",
                headers: {
                    Accept: "application/json;odata=verbose"
                },
                async: false,
                success: function (data) {
                    resolve(data)
                },
                error: function (error) {
                    reject(error)
                },
            }) // end of request
        }) // end of Promise
    } // end of function

        // Calling the Promises:
        src = "jquery file ref";
    // Calling Promise:
    LoadSCcript(src)
        .then((data) => {
            url = "SharePoint website URL";
            // Calling Promise:
            GetCurrentUSerDetails(url)
                .then((data) => {
                    console.log(data)

                })
                .catch((error) => {
                    console.log(error)
                });

        })
        .catch((error) => {
            console.log(error)
        });


```

## How to get all data from list:

This is how to retrive list items usint CAML query:

```javascript
listName = "MicroFeed";
siteUrl = "/sites/digital-books/test-werb/";
camlQuery =
  "<View>" +
  "<Query>" +
  "<OrderBy>" +
  '<FieldRef Name="ID" Ascending="FALSE"/>' +
  "</OrderBy>" +
  "</Query>" +
  "</View>";
GetListQuery(siteUrl, listName, camlQuery);

function GetListQuery(siteUrl, listName, camlQuery) {
  var clientContext = new SP.ClientContext(siteUrl);
  var list = clientContext.get_web().get_lists().getByTitle(listName);

  var caml = new SP.CamlQuery(camlQuery);
  caml.set_viewXml(); // empty query also works

  var listItemCollection = list.getItems(caml);

  clientContext.load(listItemCollection); // i requested every property

  clientContext.executeQueryAsync(
    function () {
      var listItemEnumerator = listItemCollection.getEnumerator();

      while (listItemEnumerator.moveNext()) {
        var oListItem = listItemEnumerator.get_current();
        console.log(oListItem.get_item("Title"));
      }
    },
    function (sender, args) {
      window.console && console.log(args.get_message());
    }
  );
}
```

## How to get insert data from list:

This is how to retrive list items usint CAML query:

```javascript
listName = "MicroFeed";
siteUrl = "/sites/digital-books/test-werb/";
data = [{}];
function createListItem() {
  var clientContext = new SP.ClientContext(siteUrl);
  var list = clientContext.get_web().get_lists().getByTitle(listName);

  var itemCreateInfo = new SP.ListItemCreationInformation();
  this.ListItem = list.addItem(itemCreateInfo);

  ListItem.set_item("Title", "My New Item!");
  ListItem.set_item("MediaActionClickUrl", "My New Item!");
  ListItem.update();
  clientContext.load(ListItem);

  clientContext.executeQueryAsync(
    Function.createDelegate(this, this.onQuerySucceeded),
    Function.createDelegate(this, this.onQueryFailed)
  );
}

function onQuerySucceeded() {
  alert("Item created: " + ListItem.get_id());
}

function onQueryFailed(sender, args) {
  alert("Request failed. " + args.get_message() + "\n" + args.get_stackTrace());
}
```
