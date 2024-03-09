anychart.onDocumentReady(function () {
      // the data for this sample is stored at
      // https://cdn.anychart.com/samples/maps-connectors/trip-through-the-uk/data.js
      // Creates map chart
      var map = anychart.connector();

      map.unboundRegions().enabled(true).fill('#E1E1E1').stroke('#D2D2D2');

      // Sets settings for map chart
      map.geoData('anychart.maps.united_kingdom');
      map.interactivity().selectionMode('none');

      // Sets title for map chart and customizes it
      map
        .title()
        .enabled(true)
        .useHtml(true)

      var citiesSeries = map
        .marker(getCitiesData()) 
        .type('circle')
        .size(4)
        .fill('#64b5f6')
        .stroke('2 #E1E1E1')
        .tooltip(false);

      citiesSeries.hovered().size(4).fill('#64b5f6').stroke('2 #E1E1E1');

      // Customizes labels for the airport names series
      citiesSeries
        .labels()
        .enabled(true)
        .position('center-bottom')
        .fontColor('#263238')
        .offsetY(0)
        .offsetX(5)
        .anchor('left-center')
        .format('{%name}');

      // exclude cities from the legend
      citiesSeries.legendItem(false);

      // create zoom controls
      var zoomController = anychart.ui.zoom();
      zoomController.render(map);

      // Sets container id for the chart
      map.container('container');

      // Initiates chart drawing
      map.draw();
    });

    // Helper function to create several series
    function createSeries(map, name, data, color) {
      // Creates connector series and customizes them
      var connectorSeries = map
        .connector(data)
        .startSize(0)
        .endSize(0)
        .stroke('2 ' + color)
        .name(name)
        .curvature(0);
      connectorSeries.legendItem({
        iconType: 'circle',
        fill: color,
        iconStroke: '2 #E1E1E1'
      });
      connectorSeries.hovered().stroke('1.5 #212121');

      // Customizes tooltips for the destination series
      connectorSeries
        .tooltip()
        .padding([8, 13, 10, 13])
        .fontSize(12)
        .fontColor('#fff')
        .format('{%full}')
        .titleFormat(
          '{%number}. <span style="font-size: 13px; color: #E1E1E1">{%short}</span>'
        )
        .title({ useHtml: true });
    }
