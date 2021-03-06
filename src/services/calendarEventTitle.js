'use strict';

var angular = require('angular');

angular
  .module('mwl.calendar')
  .factory('calendarEventTitle', function(calendarDateFilter, calendarTruncateEventTitleFilter) {

    function yearView(event) {
          return event.yearViewRender
            ? event.yearViewRenderRender(event)
            : event.title + ' (' + calendarDateFilter(event.startsAt, 'datetime', true) + ')';
      }

      function monthView(event) {
          return event.monthViewRender
            ? event.monthViewRender(event)
            : event.title + ' (' + calendarDateFilter(event.startsAt, 'time', true) + ')';
      }

      function monthViewTooltip(event) {
          return event.monthViewTooltipRender
            ? event.monthViewTooltipRender(event)
            : (calendarDateFilter(event.startsAt, 'time', true) + ' - ' + event.title);
      }

      function weekView(event) {
        return event.title;
      }

      function weekViewTooltip(event) {
        return event.title;
      }

      function dayView(event) {
        return event.allDay ? event.title : calendarTruncateEventTitleFilter(event.title, 20, event.height);
      }

    return {
      yearView: yearView,
      monthView: monthView,
      monthViewTooltip: monthViewTooltip,
      weekView: weekView,
      weekViewTooltip: weekViewTooltip,
      dayView: dayView
    };

  });
