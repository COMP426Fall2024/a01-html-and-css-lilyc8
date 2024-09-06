var time = $(".time-container ul li"),
    desc = $("#second ul li");

time.on("click", function(){
    desc.hide();
    var index = time.index(this),
        el = secondListElements.get(index);
    $(el).show();
});