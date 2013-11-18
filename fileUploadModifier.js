 jQuery.fn.fileUpload = function(){
var curobj = $(this);
curobj.css("visibility","hidden");
var left_margin = curobj.width() + "px";
curobj.next("img").hide();
var dummy_fileuploader = jQuery("<div></div>").css("display","block").css("left",0).css("margin-top","-22px");
dummy_fileuploader.append("<input type='text' name='dummyfileinput' style='border:1px solid #ccc; margin:0 5px 0 0px;height:20px;width:170px;'/><input type='button' value='' style='background:url(\"images/icon_upload.png\") no-repeat; width:24px; height:24px;border:none;padding:2px;'/>");
curobj.after(dummy_fileuploader);
dummy_fileuploader.find("input").click(function(){
curobj.click();
curobj.change(function(){
dummy_fileuploader.find("input[type=text]").val(curobj.val());
});
});
} 
