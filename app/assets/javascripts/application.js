// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//  javascript_include_tag
// '//ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js', :defer
// => true, :async => true
//= require jquery
//= require jquery_ujs
//= require jquery-ui

//= require bootstrap

//= require bootstrap-datetimepicker
 $(function() {

 $('[id^="tasks"]').hide();
 $('[id^="event"]').click(function() {
   $(jQuery(this).parent().siblings('[id^="tasks"]').toggle("blind", {}, 500));
   return false;
 });

$('#datetimepicker1').datetimepicker({
       maskInput: true,           // disables the text input mask
  pickDate: true,            // disables the date picker
  pickTime: true,            // disables de time picker
  pick12HourFormat: true,   // enables the 12-hour format time picker
  pickSeconds: true,         // disables seconds in the time picker
  startDate: -Infinity,      // set a minimum date
  format: 'dd/MM/yyyy hh:mm:ss',
  endDate: Infinity  
    });
});