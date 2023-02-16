# StorylineCoding - SQL

## What is SQL:

SQL stands for  Structured Query Language. This language is designed for manipulating and retreving data from a Database.

## What is a Database:
A database is a collection of organized data. All data stored in an electrical storage. All data is being organized inside tables with special relationship beetween them. This kind of relationship defines them as Relational databases, which are being control by different management sytems which will give them the name Relational database management systems, RDBMS.

## SQL syntax:

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

First we need to referance JQUERY:

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
    };
    script.onerror = function () {
      reject("Faild to load the script: " + file_name);
    };
  }); // end of Promise
} // end of function
```

If we want to get the learner details we should call currentuser:

```javascript
// Definne an AJAX call function with Promise:
function GetCurrentUSerDetails(url) {
  return new Promise((resolve, reject) => {
    // Must referance JQUERY:
    $.ajax({
      url: url + "/_api/web/currentuser",
      headers: {
        Accept: "application/json;odata=verbose",
      },
      async: false,
      success: function (data) {
        resolve(data);
      },
      error: function (error) {
        reject(error);
      },
    }); // end of request
  }); // end of Promise
} // end of function
```

```javascript
score = {};
// Calling the Promises:
src = "jquery file ref"; //https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js
// Calling Promise:
LoadSCcript(src)
  .then((data) => {
    url = "SharePoint website URL";
    // Calling Promise:
    GetCurrentUSerDetails(url)
      .then((data) => {

        score.user = data;
        GetCurrentUSerDetails(url)
        .then((data) => {
      }).catch((error) => {
        
        console.log(error);
      });
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });
```

## How to get all data from list:

This is how to retrive list items usint CAML query:

```javascript
// Create a function with Promise:
function GetListItems(url, list_name) {
  return new Promise((resolve, reject) => {
    // Must referance JQUERY:
    $.ajax({
      url: url + "/_api/web/lists/getbytitle('" + list_name + "')/items",
      headers: {
        Accept: "application/json;odata=verbose",
      },
      async: false,
      success: function (data) {
        if (data.d.results.length > 0) {
          resolve(data.d.results);
        }
      },
      error: function (error) {
        reject(error);
      },
    }); // end of request
  }); // end of Promise
} // end of function

url = "Sharepoint website URL that contains the List";
list_name = "Specific List name in website";
// Calling Promise:
GetListItems(url, list_name)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
```

```javascript
function GetRequestDigest(url) {
  return new Promise((resolve, reject) => {
    // Must referance JQUERY:
    $.ajax({
      url: url + "/_api/contextinfo",
      type: "POST",
      contentType: "application/json;odata=verbose",
      success: function (data) {
        resolve(data.d.FormDigestValue);
      },
      error: function (error) {
        reject(error);
      },
    }); // end of request
  }); // end of Promise
} // end of function
url = "https://365openu.sharepoint.com/sites/digital-books/test-werb";
GetRequestDigest(url)
  .then((data) => {
    RequestDigest = data;
  })
  .catch((error) => {
    console.log(error);
  });
```

## How to insert data to a list:

This is how to insert list items:

```javascript
// Create a function with Promise:
function AddListItems(url, list_name, data) {
  return new Promise((resolve, reject) => {
    // Must referance JQUERY:
    $.ajax({
      url: url + "/_api/web/lists/getbytitle('" + list_name + "')/items",
      type: "POST",
      contentType: "application/json;odata=verbose",
      data: JSON.stringify(data),
      headers: {
        Accept: "application/json; odata=verbose",
        "X-RequestDigest": $("#__REQUESTDIGEST").val(),
      },
      success: function (data) {
        if (data.d.results.length > 0) {
          resolve(data.d.results);
        }
      },
      error: function (error) {
        reject(error);
      },
    }); // end of request
  }); // end of Promise
} // end of function

url = "Sharepoint webiste";
list_name = "SharePoint list name";
data = { Title: "value" };
// Calling Promise:
AddListItems(url, list_name, data)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
```
