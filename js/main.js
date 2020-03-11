/*  Load file external to table */
$(document).ready(function() {
  $('#table-courses').DataTable( {
    "ajax": 'ajax/data/courses.json',
    "searching": true,
    "info": true,
    "pagingType": "full_numbers",
    "order": [[ 2, 'desc' ], [ 0, 'asc' ]]
  } );
} );
