# Olympic Games

This Angular application visualizes Olympic Games data, providing insights into various countries' participations, medals, and athletes.

## Technologies Used

- Angular 18
- Typescript
- RxJS
- Ngx-Charts: For creating interactive charts

## Functionality

The application consists of two main components:

1. **HomeComponent**: Displays a chart of participating countries medals. Users can select a country to view more details.
2. **DetailsCountryComponent**: Shows detailed information about the selected country's participation in the Olympics, including a chart of medals won over the years, as well as statistics on the number of participations, medals, and athletes.

## Running the Application

### Prerequisites

Ensure you have the following installed:

- Node.js (https://nodejs.org/)
- Angular CLI (https://angular.io/cli)

### Steps

1. Clone the repository:
   
   `git clone https://github.com/guillaumebeysson/Telesport.git`

2. Install dependencies:
    `npm install`

3. Start the development server:
    `ng serve`

## Project structure

├── public/ 
│   ├── mock    
│   │   ├── olympic.json    
├── src/    
│   ├── app/    
│   │   ├── models/ 
│   │   │   ├── CountryParticipation.ts     
│   │   │   ├── Participation.ts    
│   │   │   ├── TooltipData.ts  
│   │   ├── pages/  
│   │   │   ├── header  
│   │   │   │   ├── header.component.ts     
│   │   │   │   ├── header.component.html   
│   │   │   │   ├── header.component.css    
│   │   │   ├── home/   
│   │   │   │   ├── home.component.ts   
│   │   │   │   ├── home.component.html     
│   │   │   │   ├── home.component.css  
│   │   │   ├── details-country/    
│   │   │   │   ├── details-country.component.ts    
│   │   │   │   ├── details-country.component.html  
│   │   │   │   ├── details-country.component.css   
│   │   ├── services/   
│   │   │   ├── olympics.service.ts     
│   │   ├── app.component.ts    
│   │   ├── app.component.html  
│   │   ├── app.component.css   
│   │   ├── app.config.ts   
│   │   ├── app.routes.ts   
│   ├── index.html  
│   ├── main.ts     
│ 