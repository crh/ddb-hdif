ddbHdif.Collections.PersonCollection = Backbone.Collection.extend({
  model: ddbHdif.Models.PersonModel,
  initialize: function() {
    console.log('init person collection...');
  }
});

ddbHdif.Collections.temp = [
    {
    'title': 'Dr.',
    'salutation': 'Herr',
    'sureName': 'Herlambang',
    'foreName': 'Christian',
    'jobTitle': 'software engineer',
    'telephoneNumber': '250',
    'faxNumber': '251',
    'email': 'christian.herlambang@fiz-karlsruhe.de'
    },
    {
    'title': 'Prof.',
    'salutation': 'Frau',
    'sureName': 'Simpsons',
    'foreName': 'Lisa',
    'jobTitle': 'CEO',
    'telephoneNumber': '66 80 250',
    'faxNumber': '66 80 251',
    'email': 'lisa.simpsons@fiz-karlsruhe.de'
    },
    {
    'title': 'Dipl. Ing',
    'salutation': 'Mr',
    'sureName': 'Simpsons',
    'foreName': 'Homer',
    'jobTitle': 'CTO',
    'telephoneNumber': '223',
    'faxNumber': '234',
    'email': 'homer.simpsons@fiz-karlsruhe.de'
    }
];

