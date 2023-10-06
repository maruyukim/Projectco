# CST8334 Software Development Project
## Client

## Authors

Justin Mountain
moun0048@algonquinlive.com

## Description

Angular frontend re-design for YubillY.

## Prerequisites

> These steps need to be taken in order to run the application locally.

```
# Install node and npm

# Install ionic cli package
npm install -g @ionic/cli
```

Most of the development work will be done under ./yac/src/app/

## Setting up the Local Environment

> This command was used to initiate the project.

```
# Created a new app with
ionic start yac blank --type=angular --capacitor
```

## Running the Application

```
# Access the app via port 8100
ionic serve

# If you are missing modules try this command from the /yac/ directory
npm ci
```

## Generating New Features

### Making New Pages

> Pages are the different application endpoints that users can be directed to.

Pages are routable points in the web app.

```
# Generates a new page called 'dashboard'
ionic g page pages/dashboard
```

### Making New Components

> Components are individual building blocks for the application. Components can be nested inside other components. 

```
# Generates a new re-usable component called 'single-receipt'
ionic g component components/single-receipt

```

### Making New Services

> This was used for the Authentication service.

Services can be injected into pages with Angular.

```
# Generates a new service called 'receipts'
ionic g service services/receipts
```

### Making New Interceptors

> This was used to create the interceptor to add the token to subsequent server requests.

```
# Generates a new interceptor called 'auth'
ionic g interceptor interceptors/auth
```

### Sample Component

#### The Structure of a Component

The sample component can be found in the following directory:

```
./yac/src/app/components/sample/
```

Inside this directory, there are four files:

1. sample.component.html
2. sample.component.scss
3. sample.component.spec.ts
4. sample.component.ts

The .html file is like the view or *what* is being displayed on screen.

The .scss file will hold the css styles that will be used on the component. 

The .spec.ts file will be any tests that the component requires.

The .ts file is like the controller or *how* the component will accomplish its tasks. 

#### Inside `sample.component.ts`

Please take some time to review the different pieces of the component. Fundamentally, this sample component is completing the sample request given to us as an explanation on how to use Postman. 

The class has three pieces: 

1. The `responseJSONArray` that is used to access the JSON object in the .html file.
2. The constructure, which should include instantiations of any modules that the class needs access to. In this case, we instantiate an `HttpClient`.
3. The `ngOnInit()` function runs when the class is instantiated or, in other words, when the component is rendered in HTML.

In this sample component, `ngOnInit()` makes a GET request to the server, then manipulates the response into something that the html component can handle. 

#### Inside `sample.component.html`

In this example, we're generating one card for each individual object within the server's response. The following logic is in the `ion-card` component:

```
*ngFor="let item of responseJSONArray"
```

The tells Angular to loop over the items in `responseJSONArray` from the .ts file and to create an `ion-card` for each object. Inside the `ion-card` component, we can now access the individual `item` from the for loop with `item[1].key`. 

> We need to use `item[1].key` because the index of the `item` is stored at `item[0]`.

#### Inside `/pages/dashboard/`

As of 2023/10/06, the sample component is being rendered at the `/dashboard/` endpoint, which is the immediate re-direct after a user logs in. 

Looking inside `dashboard.page.ts` shows no logic, but please note that the `SampleComponent` was imported at the top of the file, as well as under `@Components`. This is how we tell the dashboard page where to find the components it will need to render to the screen. 

The `dashboard.page.html` file is equally straight-forward. The `ion-header` and `ion-content` components are automatically created when a new page is generated. Lines 14 to 16 show how our sample component is being rendered inside the dashboard page: 

```
<div id="container">
  <sample-component></sample-component>
</div>
```

### Continuing Development

Please keep the existing file structure:

1. New `pages` (user endpoints) should be under `/pages/new-page`
2. New `components` should be under `/components/new-component`

If you create a new page, you can either start to implement a navigation bar or just directly access the new page at:

```
http://localhost:8100/new-page
```

When working with calls to the server, use the `sample-component` as a guide and do not worry about sending the authentication token, that is being handled by `/interceptors/auth.interceptor.ts`. Please report any server authentication related bugs.

> Please create a new **git branch** before pushing to the repository. This avoids merge conflicts with people working in the same files.

## Handling Authentication

### Authentication Service
### Interceptor
### Login Component
### To Do

## Resources

```
# Angular in 100 seconds
https://www.youtube.com/watch?v=Ata9cSC2WpM

# Angular Crash Course
https://www.youtube.com/watch?v=3dHNOWTI7H8

# Building a blank Ionic project
https://www.youtube.com/watch?v=y_vwf15eADs

# Authentication
https://www.youtube.com/watch?v=OG8vbzVuFoc

# Ionic UI Components
https://ionicframework.com/docs/components

```
