var chart = AmCharts.makeChart( "chartdiv1", {
  "type": "serial",
  "theme": "light",
  "autoMargins": false,
  "marginTop": 30,
  "marginLeft": 80,
  "marginBottom": 30,
  "marginRight": 50,
  "dataProvider": [ {
    "category": "Course Maxile",
    "excelent": 20,
    "good": 20,
    "average": 20,
    "poor": 20,
    "bad": 20,
    "limit": 78,
    "full": 100,
    "bullet": 65
  } ],
  "valueAxes": [ {
    "maximum": 100,
    "stackType": "regular",
    "gridAlpha": 0
  } ],
  "startDuration": 1,
  "graphs": [ {
    "fillAlphas": 0.8,
    "lineColor": "#19d228",
    "showBalloon": false,
    "type": "column",
    "valueField": "excelent"
  }, {
    "fillAlphas": 0.8,
    "lineColor": "#b4dd1e",
    "showBalloon": false,
    "type": "column",
    "valueField": "good"
  }, {
    "fillAlphas": 0.8,
    "lineColor": "#f4fb16",
    "showBalloon": false,
    "type": "column",
    "valueField": "average"
  }, {
    "fillAlphas": 0.8,
    "lineColor": "#f6d32b",
    "showBalloon": false,
    "type": "column",
    "valueField": "poor"
  }, {
    "fillAlphas": 0.8,
    "lineColor": "#fb7116",
    "showBalloon": false,
    "type": "column",
    "valueField": "bad"
  }, {
    "clustered": false,
    "columnWidth": 0.1,
    "fillAlphas": 1,
    "lineColor": "#000000",
    "stackable": false,
    "type": "column",
    "valueField": "bullet"
  }, {
    "columnWidth": 0.5,
    "lineColor": "#000000",
    "lineThickness": 3,
    "noStepRisers": true,
    "stackable": false,
    "type": "step",
    "valueField": "limit"
  } ],
  "rotate": true,
  "columnWidth": 1,
  "categoryField": "category",
  "categoryAxis": {
    "gridAlpha": 0,
    "position": "left"
  }
} );


var chart = AmCharts.makeChart( "chartdiv2", {
  "type": "serial",
  "rotate": true,
  "theme": "light",
  "autoMargins": false,
  "marginTop": 30,
  "marginLeft": 80,
  "marginBottom": 30,
  "marginRight": 50,
  "dataProvider": [ {
    "category": "Accuracy",
    "excelent": 20,
    "good": 20,
    "average": 20,
    "poor": 20,
    "bad": 20,
    "limit": 78,
    "full": 100,
    "bullet": 65
  } ],
  "valueAxes": [ {
    "maximum": 100,
    "stackType": "regular",
    "gridAlpha": 0
  } ],
  "startDuration": 1,
  "graphs": [ {
    "valueField": "full",
    "showBalloon": false,
    "type": "column",
    "lineAlpha": 0,
    "fillAlphas": 0.8,
    "fillColors": [ "#19d228", "#f6d32b", "#fb2316" ],
    "gradientOrientation": "horizontal",
  }, {
    "clustered": false,
    "columnWidth": 0.1,
    "fillAlphas": 1,
    "lineColor": "#000000",
    "stackable": false,
    "type": "column",
    "valueField": "bullet"
  }, {
    "columnWidth": 0.5,
    "lineColor": "#000000",
    "lineThickness": 3,
    "noStepRisers": true,
    "stackable": false,
    "type": "step",
    "valueField": "limit"
  } ],
  "columnWidth": 1,
  "categoryField": "category",
  "categoryAxis": {
    "gridAlpha": 0,
    "position": "left"
  }
} );var chart = AmCharts.makeChart( "chartdiv3", {
  "type": "serial",
  "rotate": true,
  "theme": "light",
  "autoMargins": false,
  "marginTop": 30,
  "marginLeft": 80,
  "marginBottom": 30,
  "marginRight": 50,
  "dataProvider": [ {
    "category": "Skill Passed",
    "excelent": 20,
    "good": 20,
    "average": 20,
    "poor": 20,
    "bad": 20,
    "limit": 78,
    "full": 100,
    "bullet": 65
  } ],
  "valueAxes": [ {
    "maximum": 100,
    "stackType": "regular",
    "gridAlpha": 0
  } ],
  "startDuration": 1,
  "graphs": [ {
    "valueField": "full",
    "showBalloon": false,
    "type": "column",
    "lineAlpha": 0,
    "fillAlphas": 0.8,
    "fillColors": [ "#19d228", "#f6d32b", "#fb2316" ],
    "gradientOrientation": "horizontal",
  }, {
    "clustered": false,
    "columnWidth": 0.1,
    "fillAlphas": 1,
    "lineColor": "#000000",
    "stackable": false,
    "type": "column",
    "valueField": "bullet"
  }, {
    "columnWidth": 0.5,
    "lineColor": "#000000",
    "lineThickness": 3,
    "noStepRisers": true,
    "stackable": false,
    "type": "step",
    "valueField": "limit"
  } ],
  "columnWidth": 1,
  "categoryField": "category",
  "categoryAxis": {
    "gridAlpha": 0,
    "position": "left"
  }
} );var chart = AmCharts.makeChart( "chartdiv4", {
  "type": "serial",
  "rotate": true,
  "theme": "light",
  "autoMargins": false,
  "marginTop": 30,
  "marginLeft": 80,
  "marginBottom": 30,
  "marginRight": 50,
  "dataProvider": [ {
    "category": "Track Passed",
    "excelent": 20,
    "good": 20,
    "average": 20,
    "poor": 20,
    "bad": 20,
    "limit": 78,
    "full": 100,
    "bullet": 65
  } ],
  "valueAxes": [ {
    "maximum": 100,
    "stackType": "regular",
    "gridAlpha": 0
  } ],
  "startDuration": 1,
  "graphs": [ {
    "valueField": "full",
    "showBalloon": false,
    "type": "column",
    "lineAlpha": 0,
    "fillAlphas": 0.8,
    "fillColors": [ "#19d228", "#f6d32b", "#fb2316" ],
    "gradientOrientation": "horizontal",
  }, {
    "clustered": false,
    "columnWidth": 0.1,
    "fillAlphas": 1,
    "lineColor": "#000000",
    "stackable": false,
    "type": "column",
    "valueField": "bullet"
  }, {
    "columnWidth": 0.5,
    "lineColor": "#000000",
    "lineThickness": 3,
    "noStepRisers": true,
    "stackable": false,
    "type": "step",
    "valueField": "limit"
  } ],
  "columnWidth": 1,
  "categoryField": "category",
  "categoryAxis": {
    "gridAlpha": 0,
    "position": "left"
  }
} );