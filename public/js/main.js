/* Watch Video Popup */
$('#watchVideo').magnificPopup({
    items: [
      {
        src: 'https://www.youtube.com/watch?v=Ea4UBKuaX1E',
        type: 'iframe'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image'
});
/* Scrolling Animation For Menu */
$('.navbar #impactMenu, .footer-links #impactMenu').click(function(){
	$('html, body').animate({
	    scrollTop: $("#impact-title").offset().top - 115
	}, 1000);
});
$('.navbar #highlightsMenu, .footer-links #highlightsMenu').click(function(){
	$('html, body').animate({
	    scrollTop: $("#highlights").offset().top - 115
	}, 1000);
});
$('.navbar #numbersMenu, .footer-links #numbersMenu').click(function(){
	$('html, body').animate({
	    scrollTop: $("#theNumbers").offset().top - 115
	}, 1000);
});
/* Scrolling Animation For Header Area Arrow Scrolling */
function impactAreasScroll(){
	$('html, body').animate({
	    scrollTop: $("#impact-title").offset().top - 115
	}, 1000);
}
/* Menu Scroll Transition */
var targetOffset = $("#impact-title").offset().top;
var $w = $(window).scroll(function(){
    if ( $w.scrollTop() > targetOffset ) {   
        $('.navbar').css({
        	"-webkit-box-shadow":"0px 3px 0px 0px rgba(60,40,134,1)",
        	"-moz-box-shadow":"0px 3px 0px 0px rgba(60,40,134,1)",
        	"box-shadow":"0px 3px 0px 0px rgba(60,40,134,1)",
    	});
    } else {
     	if ( $w.scrollTop() < targetOffset ) {
	      	$('.navbar').css({
	      		"-webkit-box-shadow":"none",
	        	"-moz-box-shadow":"none",
	        	"box-shadow":"none"
	      	});
     	}
    }
});
/* Donor Doughnut Chart */
var data = [
    {
        value: 2371757,
        color:"#3c2886",
        highlight: "#31206C",
        label: "Program Development"
    },
    {
        value: 1882834,
        color: "#a05eb5",
        highlight: "#89519B",
        label: "Laurier's Greatest Need"
    },
    {
        value: 583625,
        color: "#e87722",
        highlight: "#CE6A1E",
        label: "Student Life"
    },
    {
        value: 15975,
        color: "#00a3e0",
        highlight: "#0090C6",
        label: "Equipment"
    },
    {
        value: 1387233,
        color: "#fcb814",
        highlight: "#E2A512",
        label: "Buildings and Facilities"
    },
    {
        value: 1387233,
        color: "#ef4639",
        highlight: "#D53F33",
        label: "Scholarships and Awards"
    }
]
var options = {
    segmentShowStroke : false,
    segmentStrokeColor : "#fff",
    segmentStrokeWidth : 2,
    percentageInnerCutout : 60,
    animationSteps : 100,
    animationEasing : "easeOutBounce",
    animateRotate : true,
    animateScale : true,
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",
    responsive: true,
    tooltipTemplate: "<%if (label){%><%=label%>: $<%}%><%= value %>",
	multiTooltipTemplate: "<%= value %>",
    tooltipFillColor: "rgba(55, 55, 55, 1)",
    scaleFontFamily: "'proxima-nova', sans-serif",
    tooltipFontSize: 12,
    tooltipXPadding: 15,
    tooltipCornerRadius: 3
}
var ctx = document.getElementById("donorChart").getContext("2d");
var myDoughnutChart = new Chart(ctx).Doughnut(data,options);
document.getElementById("donorChartLegend").innerHTML = myDoughnutChart.generateLegend();