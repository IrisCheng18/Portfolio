var textProfile = `A former professional electrical/software/field appliation engineer and project manager with a strong operational background, Iris has been involved in the system integration development as well as project management in the display/auto industry for over 15 years.<br><br> 

Appreciated by the industry clients and colleagues for her technical troubleshooting and managerial skills, Iris has demonstrated her ability to multitask enigneer duties with business devlopment.<br><br>

Now Iris is looking for a career change to become an IT professional to fullfills her childhood dream.`
$(".card-text").html(textProfile);

var previousClickedTab = "profile";

$(document).on("click", ".nav-item", function (event) {
    var li = $(event.currentTarget).attr("data-name").trim();
    console.log(li);
    console.log(event);

    switch (previousClickedTab) {
        case["profile"]: $("#profile").removeClass("active");
            break;

    };

});
