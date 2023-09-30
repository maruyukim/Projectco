# CST8334 Software Development Project
## Client

## Authors

Justin Mountain
moun0048@algonquinlive.com

## Description

### Pages on Existing App

#### Dashboard

List of Widgets/Components in Dashboard view:

1. Today's Expenses
2. Last 7 Days
3. Last 30 Days
4. Expense Chart
5. ???
6. Last 10 Expenses
7. Expense Groups (based off labels)

#### Receipts

Paginated list of all receipts uploaded into YubillY.

Can sort by Period, Merchant, Currency, Label

#### Upload Receipt

#### Settings

Can make modifications to:

1. Profile
2. Labels
3. Currencies

Can access:

1. Recycle Bin
2. Junk Folder
3. Support

## Prerequisites

```
# Install node and npm

# Install ionic cli package
npm install -g @ionic/cli
```

Most of the development work will be done under ./yubilly-angular/src/app/

## Setting up the local environment

```
# Created a new app with
ionic start yubilly-angular blank --type=angular
```

## Running the application

```
# Access the app via port 8100
ionic serve
```

### Generating New Features

#### Making New Pages

Pages are routable points in the web app.

```
# Generates a new page called 'dashboard'
ionic g page pages/dashboard
```

#### Making New Services

Services can be injected into pages with Angular.

```
# Generates a new service called 'receipts'
ionic g service services/receipts
```

#### Making New Components

```
# Generates a new re-usable component called 'single-receipt'
ionic g component components/single-receipt

```

## Future Recommendations

## Resources

```
# Angular in 100 seconds
https://www.youtube.com/watch?v=Ata9cSC2WpM

# Angular Crash Course
https://www.youtube.com/watch?v=3dHNOWTI7H8

# Building a blank Ionic project
https://www.youtube.com/watch?v=y_vwf15eADs

# Ionic UI Components
https://ionicframework.com/docs/components

```
