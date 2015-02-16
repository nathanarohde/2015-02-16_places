$(document).ready(function() {
 $('form#new-place').submit(function(event) {
   event.preventDefault();

   var inputPlace = $('input#new-place').val();
   var inputLocation = $('input#new-location').val();
   var inputTimeOfYear = $('input#new-time-of-year').val();
   var inputNotes = $('input#new-notes').val();
   var newPlace = { place: inputPlace, local: inputLocation, timeOfYear: inputTimeOfYear, notes: inputNotes };


   $('ul#places').append('<li><span class="place">' + newPlace.place + '</span></li>');

   $('input#new-place').val('');
   $('input#new-location').val('');
   $('input#new-time-of-year').val('');
   $('input#new-notes').val('');

   $('.place').last().click(function() {
     $('#show-place').show();
     $('#show-place h2').text(newPlace.place);
     $('.new-place').text(newPlace.place);
     $('.new-location').text(newPlace.local);
     $('.new-time-of-year').text(newPlace.timeOfYear);
     $('.new-notes').text(newPlace.notes);
   });
 });
});
