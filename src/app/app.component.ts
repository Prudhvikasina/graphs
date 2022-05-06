import { Component } from '@angular/core';
import * as Plotly from 'plotly.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-plots';
  graph1 = {
    data: [
      { x: [1, 2, 3], y: [2, 3, 4], type: 'bar' },
    ],
    layout: {title: 'Bar Plot', 
    width: 700,
    height: 500}
  };
  graph2 = {
    data: [
      { x: [1, 2, 3, 4, 5], y: [1, 4, 9, 4, 1], type: 'scatter' },
      { x: [1, 2, 3, 4, 5], y: [1, 3, 6, 9, 6], type: 'scatter' },
      { x: [1, 2, 3, 4, 5], y: [1, 2, 4, 5, 6], type: 'scatter' },
    ],
    layout: {title: 'Scatter Plot',
    width: 700,
    height: 500}
  };
  graph3 = {
    data: [
      {
            values: [16, 15, 12, 6, 5, 4, 42],
          
            labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World' ],
          
            domain: {column: 0},
          
            name: 'GHG Emissions',
          
            hoverinfo: 'label+percent+name',
          
            hole: .4,
          
            type: 'pie'
          
          },{
          
            values: [27, 11, 25, 8, 1, 3, 25],
          
            labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World' ],
          
            text: 'CO2',
          
            textposition: 'inside',
          
            domain: {column: 1},
          
            name: 'CO2 Emissions',
          
            hoverinfo: 'label+percent+name',
          
            hole: .4,
          
            type: 'pie'
          
          }
    ],
    layout:{
      title: 'Global Emissions 1990-2011 Pie(Donut Chart)',

      annotations: [
    
        {
    
          font: {
    
            size: 20
    
          },
    
          showarrow: false,
    
          text: 'GHG',
    
          x: 0.17,
    
          y: 0.5
    
        },
    
        {
    
          font: {
    
            size: 20
    
          },
    
          showarrow: false,
    
          text: 'CO2',
    
          x: 0.82,
    
          y: 0.5
    
        }
    
      ],
    
      height: 400,
    
      width: 600,
    
      showlegend: false,
    
      grid: {rows: 1, columns: 2}
    }
  }

  graph4 = {
    data: [
      {

        type: "sunburst",
      
        labels: ["Eve", "Cain", "Seth", "Enos", "Noam", "Abel", "Awan", "Enoch", "Azura"],
      
        parents: ["", "Eve", "Eve", "Seth", "Seth", "Eve", "Eve", "Awan", "Eve" ],
      
        values:  [10, 14, 12, 10, 2, 6, 6, 4, 4],
      
        outsidetextfont: {size: 20, color: "#377eb8"},
      
        leaf: {opacity: 0.4},
      
        marker: {line: {width: 2}},
      
      }
    ],
    layout: {title: 'Bar Plot',
  

      width: 500,
    
      height: 500
    }
  };

  graph5 = {
    data: [ { x: [1, 2, 3, 4],

    y: [10, 11, 12, 13],
  
    mode: 'markers',
    marker: {
      size: [40, 60, 80, 100]
  
    }}],
    
    layout: [{title: 'Marker Size',
    showlegend: true,
    width: 500,
    height: 500}]
  };
  graph6= {
    data: [ { type: "indicator",
    mode: "number+delta",
    value: 492,
    delta: { reference: 512, valueformat: ".0f" },
    ticker: { showticker: true },
    vmax: 500,
    domain: { y: [0, 1], x: [0.25, 0.75] },
    title: { text: "Users online" }
  },
  {
    y: [325, 324, 405, 400, 424, 404, 417, 432, 419, 394, 410, 426, 413, 419, 404, 408, 401, 377, 368, 361, 356, 359, 375, 397, 394, 418, 437, 450, 430, 442, 424, 443, 420, 418, 423, 423, 426, 440, 437, 436, 447, 460, 478, 472, 450, 456, 436, 418, 429, 412, 429, 442, 464, 447, 434, 457, 474, 480, 499, 497, 480, 502, 512, 492]
  }
],

 layout :[{ width: 600, height: 450, xaxis: { range: [0, 62]}}]  
 }

 private trace1 = {
  x:['2020-10-04', '2021-11-04', '2023-12-04'],
  y: [90, 40, 60],
  type: 'scatter'
};

data = [this.trace1];
 layout = {
  title: 'Scroll and Zoom',
  showlegend: false
};

config={
  scrollZoom: true
}

Quick ={
  data : [{
    x:['trees', 'flowers', 'hedges'],
    y: [150, 5, 40],
    type: 'bar'}],
   layout : {
    title: 'Remove Modebar Buttons',
    showlegend: false},
    config:{
      modeBarButtonsToRemove: ['toImage']
    }
}
trace = {
  x:['Zebras', 'Lions', 'Pelicans'],
  y: [90, 40, 60],
  type: 'bar',
  name: 'New York Zoo'
}
trace2 = {
  x:['Zebras', 'Lions', 'Pelicans'],
  y: [10, 80, 45],
  type: 'bar',
  name: 'San Francisco Zoo'
}
  chart={
 data : [this.trace,this.trace2],
 layout : {
  title: 'Hide the Modebar',
  showlegend: true
},
config:{
  displayModeBar:false
}
}
}
