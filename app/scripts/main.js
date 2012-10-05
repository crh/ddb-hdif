window.ddbHdif = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function() {
    console.log('Starting ddb helpdesk web app...');
    new ddbHdif.Views.personListView();
  }
};

$(document).ready(function() {
  ddbHdif.init();
});