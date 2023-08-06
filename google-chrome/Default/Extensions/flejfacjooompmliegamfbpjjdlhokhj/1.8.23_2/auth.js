
function initAutoVoiceApi() {
  var apiName = 'messaging'
  var apiVersion = 'v1'
  var autovoiceServer = "autovoicejoaomgcd.appspot.com";
  var apiRoot = 'https://' + autovoiceServer + '/_ah/api';
  
  var callback = function() {
      console.log("Success loading autovoice API!");
  }

  gapi.client.load(apiName, apiVersion, callback, apiRoot);
}();
  
