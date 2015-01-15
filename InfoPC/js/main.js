$(function (){
	showTable(".basic");
	$("li").click(function() {
		showTable(".".concat(this.id));
		$("li").removeClass("active");
		$(this).addClass("active");
	});
	function showTable(nameClass){
		$("table").addClass("non_Display");
		$(nameClass).removeClass("non_Display");
		if (nameClass != ".process") {
			$("#listProcess").addClass("non_Display");
		}
		else{
			$("#listProcess").removeClass("non_Display");
		}
	}
});