# [DDB Help Desk][![Build Status]](http://escidoc.org/jenkins)

## description
ddb help desk is a web application for managing ddb institutions and its users.

## getting started
### download
Clone the repo, `git clone https://github.com/Deutsche-Digitale-Bibliothek/ddb-helpdesk`

### build
we are using [yeoman](http://yeoman.io) for building and packaging.

### run

```shell
$ cd app
$ python -m SimpleHTTPServer 3004
```

if you are using yeoman
```shell
$ yeoman server
````

open web browser: `http://localhost:3004`

## usage
*TODO*

## examples
*TODO*

## tips
*TODO*

## bug tracker
Have a bug? Please create an issue [https://jira.deutsche-digitale-bibliothek.de/browse/DDBEXTRA], Component: DDB HelpDesk that conforms with [necolas's guidelines](https://github.com/necolas/issue-guidelines).

## developers

### IDE / Text Editor

#### Eclipse

If you are using eclipse, please refer to [Web Application Developement with Eclipse](https://www.escidoc.org/wiki/Web_Application_Development#Eclipse)

##### Bootstrap

+ Create a JavaScript project
```
  CTRL-3 > new javascript > 'New JavaScript Project'
```

+ choose a project name, for example: ddb-hdif
+ check 'create project from exiting source' (ALT + x)
+ choose the cloned project, i.e., ddb-hdif
+ click finish
+ make sure you configure 
  + [HTML Tidy](https://www.escidoc.org/wiki/Web_Application_Development#HTML_Tidy_Plug-ins)
  + [JSHint](https://www.escidoc.org/wiki/Web_Application_Development#JS_Hint) 
  +  [JavaScript Formmater and Code Clean Up](https://www.escidoc.org/wiki/Web_Application_Development#Eclipse_Formatter_.26_Code_Clean)
  before you start developing.
  + [Google Closure
    Linter](https://www.escidoc.org/wiki/Web_Application_Development#Google_Closure_Linter_Plug-ins)

### REST service access

you need a VPN access to the FIZ Karlsruhe development server. Ask Frank Schwichtenberg, if you need one.

### technology
+ html
+ css
+ javascript
+ backbone.js

### design
*TODO*

### _not_ supported browsers
IE older than version 9

### models
+ organization
+ person

### collections
+ organization-collection
+ person-collection

### view

#### login
*TODO*

#### edit
*TODO*

#### breadcrump
*TODO*

#### search
*TODO*

### routes
*TODO*

### first iteration
*TODO*

### rest service
dev service URI: http://141.66.8.240:8080/aas/ (FIZ KA/IEE VPN is needed)

## implementation
*TODO*
+ yeoman.io
+ backbone.js

### directory structure
```
.
|-Mock
|-app
|---components
|---scripts
|-----collections
|-----helpers
|-----models
|-----routes
|-----templates
|-----vendor
|-----views
|---styles
|-test
|---lib
|-----mocha-1.2.2
|---runner
```

## contributing
*TODO*

+ Code Style
  Please follow our [HTML, CSS and JavaScript style guide](https://www.escidoc.org/wiki/Web_Application_Development#Code_Style).

## authors

** Frank Schwichtenberg **
+ https://github.com/fschwic

** Frank Asseg **
+ https://github.com/fasseg

** Christian Herlambang **
+ http://gplus.to/crh
+ https://github.com/crh

## copyright and license

Copyright 2012 FIZ Karlsruhe.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this work except in compliance with the License.
You may obtain a copy of the License in the LICENSE file, or at:

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
