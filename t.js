function LoadSCcript(src) {
    return new Promise((resolve, reject) => {
        var arr = src.split("/");
        var last_item = arr.length - 1;
        var file_name = arr[last_item];
        var script = document.createElement("script");

        script.src = src;
        document.getElementsByTagName("head")[0].appendChild(script);

        script.onload = function() {
            resolve("Script: " + file_name + " loaded and ready");
        };
        script.onerror = function() {
            reject("Faild to load the script: " + file_name);
        };
    }); // end of Promise
} // end of function

camlQuery = "<Query>" +
    "<Where>" +
    "<Eq>" +
    "<FieldRef Name='Title' />" +
    "<Value Type='Text'>dummy@gmail.com</Value>" +
    "</Eq>" +
    "</Where>" +
    "</Query>" +
    "<ViewFields>" +
    "<FieldRef Name='Title' />" +
    "</ViewFields>" +
    "<QueryOptions />";

function GetCurrentUSerDetails(url) {
    return new Promise((resolve, reject) => {
        // Must referance JQUERY:
        $.ajax({
            url: url + "/_api/web/currentuser",
            headers: {
                Accept: "application/json;odata=verbose",
            },
            async: false,
            success: function(data) {
                resolve(data);
            },
            error: function(error) {
                reject(error);
            },
        }); // end of request
    }); // end of Promise
} // end of function

function GetRequestDigest(url) {
    return new Promise((resolve, reject) => {
        // Must referance JQUERY:
        $.ajax({
            url: url + "/_api/contextinfo",
            type: "POST",
            contentType: "application/json;odata=verbose",
            headers: {
                Accept: "application/json;odata=verbose",
            },
            success: function(data) {
                resolve(data);
            },
            error: function(error) {
                reject(error);
            },
        }); // end of request
    }); // end of Promise
} // end of function



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
            success: function(data) {
                resolve(data);

            },
            error: function(error) {
                reject(error);
            },
        }); // end of request
    }); // end of Promise
} // end of function

var viewXml = {
    ViewXml: "<View><Query /><ViewFields><FieldRef Name='Tile' /><FieldRef Name='SearchContent' /><FieldRef Name='ContentData' /></ViewFields><QueryOptions /></View>"
}

var call = jQuery.ajax({
    url: _spPageContextInfo.webAbsoluteUrl + "/_api/Web/Lists/getByTitle('test')/GetItems(query=@v1)?" +
        "@v1=" + JSON.stringify(viewXml),
    type: "POST",
    dataType: "json",
    headers: {
        Accept: "application/json;odata=verbose",
        "X-RequestDigest": jQuery("#__REQUESTDIGEST").val()
    }
});
call.done(function(data, textStatus, jqXHR) {
    var message = jQuery("#message");
    message.text("Beverages");
    message.append("<br/>");
    jQuery.each(data.d.results, function(index, value) {
        console.log(value.Title);

    });
});
call.fail(function(jqXHR, textStatus, errorThrown) {
    var response = "";
    try {
        var parsed = JSON.parse(jqXHR.responseText);
        response = parsed.error.message.value;
    } catch (e) {
        response = jqXHR.responseText;
    }
    alert("Call failed. Error: " + response);
});





score = {};
// Calling the Promises:
src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js";
// Calling Promise:
LoadSCcript(src)
    .then((data) => {
        url = "https://365openu.sharepoint.com/sites/digital-books/test-werb";
        // Calling Promise:
        GetCurrentUSerDetails(url)
            .then((data) => {

                score.user = data.d;
                GetRequestDigest(url)
                    .then((data) => {
                        score.RequestDigest =
                            data
                            .d
                            .GetContextWebInformation
                            .FormDigestValue;
                        url = "https://365openu.sharepoint.com/sites/digital-books/test-werb";
                        list_name = 'MicroFeed';
                        GetListItems(url, list_name)
                            .then((data) => {

                                score.ListData = data.d.results;
                                list_name = 'test';

                                GetListItemsQuery(url, list_name, camlQuery)
                                    .then((data) => {
                                        if (data.d.results.length > 0) {
                                            console.log(data.d.results);
                                        } else {
                                            console.log("List return empty!")
                                        }

                                    }).catch((error) => {

                                        console.log(error);
                                    })
                            }).catch((error) => {

                                console.log(error);
                            })
                    }).catch((error) => {

                        console.log(error);
                    })

            })
            .then((data) => {

            }).catch((error) => {

                console.log(error);
            })
    }).catch((error) => {
        console.log(error);
    })