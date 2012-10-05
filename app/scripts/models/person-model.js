ddbHdif.Models.PersonModel = Backbone.Model.extend({
  defaults: {
    'title': 'Dr.',
    'salutation': 'Herr',
    'sureName': 'Herlambang',
    'foreName': 'Christian',
    'jobTitle': 'software engineer',
    'telephoneNumber': '250',
    'faxNumber': '251',
    'email': 'christian.herlambang@fiz-karlsruhe.de'
  },
  initialize: function() {
    console.log('initializing model...');
    console.log('toString(): ' + JSON.stringify(arguments));
  }
});
