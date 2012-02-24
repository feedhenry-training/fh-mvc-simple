#Feedhenry App in MVC Pattern (Basic)

## What is MVC
* MVC is a pattern for code decoupling /division
* View -- Render User Interface 
* Controller -- Process User Actions
* Model -- Data Logic

<img src="https://github.com/keyang-feedhenry/fh-mvc-simple/raw/master/docs/MVCMODEL.png"/>

## Differences between Feedhenry Hybrid App and a Website
* Event Driven -- User actions trigger DOM events.
* Stateful -- Single page app.
* Single HTML File -- All views go to one HTML page.

## Why FH App with MVC
* Complexity Reduction: Separating Code according to its concerns.
* Extensibility: Simpler to add new features.
* Maintainability: Simpler to debug etc.
* Readability: Easier for other developers using code.

<img src="https://github.com/keyang-feedhenry/fh-mvc-simple/raw/master/docs/FHMVCMODEL.png"/>

## Model-View-Controller Code

### View
For HTML, view Code is HTML & CSS based. If an extra framework (like Sencha) is imported, Views are usually wrapped by Javascript code.
The most basic and simple View is a div tag which isolates the single Html page to many views.
For example:

		<div class="page" id="viewId">
		<!-- view html content -->
		
		</div> 

It is more important to have a "view" concept in mind. 


### Controller
Controllers have direct associations with views and models which are:

* View: DOM/jQuery. Controllers ask views to update.
* Model: Javascript. Controllers ask models to perform data process progress.
Controllers receive user actions or actions from other controllers.

Here is a simple controller code in Javascript:

		var ControllerName={
			action1:function(){
				//implementation
			},
			action2:function(){
				//implementation
			}
			...
		}


### Model
Model processes data requests such as load data, save data, remove data, validate data etc..
Basically, all model methods should be non-blocking. Model methods should have a callback function parameter which will pass result to that function when data processing is finished.
Since in Feedhenry MVC architecture there is no communication between models and views, Data process results generally will go though controllers so that views could be updated.  

Here is a simple model code in Javascript:

		var ModelName={
			data:[],
			load:function(callback){
				//implementation
			},
			save:function(callback){
				//implementation
			},
			validate:function(callback){
				//implementation
			}
		
		} 

## Example
App Name: Personal Info Application
Features:

* Login/Logout
* Using Cloud Data
* Pin me on Map
* List All Users
* Integrate with jQuery Mobile

Please checkout v1 branch to proceed with the tutorial.


