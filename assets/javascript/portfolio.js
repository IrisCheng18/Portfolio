var textProfile = `A former professional electrical/software/field appliation engineer and project manager with a strong operational background, Iris has been involved in the system integration development as well as project management in the display/auto industry for over 15 years.<br><br> 

Appreciated by the industry clients and colleagues for her technical troubleshooting and managerial skills, Iris has demonstrated her ability to multitask enigneer duties with business devlopment.<br><br>

Now Iris is looking for a career change to become an IT professional to fullfills her childhood dream.`


var previousClickedTab = "profile";

$(document).on("click", ".nav-item", function (event) {
    var activeTab = $(event.currentTarget).attr("data-name").trim();
    console.log(activeTab);
    // console.log(event);

    switch (previousClickedTab) {
        case "profile":
            $("#profile").removeClass("active");
            break;
        case "current":
            $("#current").removeClass("active");
            break;
        case "past":
            $("#past").removeClass("active");
            break;
        case "education":
            $("#education").removeClass("active");
            break;
        case "contact":
            $("#contact").removeClass("active");
            break;
    };

    switch (activeTab) {
        case "profile":
            $(".card-text").html(textProfile);
            $("#profile").addClass("active");
            break;
        case "current":
            $(".card-text").html("");
            $("#current").addClass("active");
            break;
        case "past":
            $(".card-text").html("");
            $("#past").addClass("active");
            break;
        case "education":
            $(".card-text").html("");
            $("#education").addClass("active");
            break;
        case "contact":
            $(".card-text").html("");
            $("#contact").addClass("active");
            break;
        default:
    };
    previousClickedTab = activeTab;
});
