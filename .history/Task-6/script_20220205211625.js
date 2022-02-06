$(".textb1").on("keyup",function(e){
    if(e.keyCode == 13 && $(".textb").val() != "")
    {
        var task =$("<div class='task'></div>").text($(".textb").val());
        var disc =$("<div class='task'></div>").text($(".textb1").val());
        var del =$("<i class='fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
        });
        var tick =$("<i class='fas fa-check'></i>").click(function(){
            var p =$(this).parent();
            p.fadeOut(function(){
                $(".complete").append(p);
                p.fadeIn();
            });
            $(this).remove();
        });
        task.append(del,tick);
        disc.append(del,tick);
        $(".notdone").append(task);
        $(".notdone").append(disc);
        $(".texttb").val("");
    }
});