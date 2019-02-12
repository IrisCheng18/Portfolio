// var txtProfile = `A former professional electrical/software/field appliation engineer and project manager with a strong operational background, Iris has been involved in the system integration development as well as project management in the display/auto industry for over 15 years.<br><br> 

// Appreciated by the industry clients and colleagues for her technical troubleshooting and managerial skills, Iris has demonstrated her ability to multitask enigneer duties with business devlopment.<br><br>

// Now Iris is looking for a career change to become an IT professional to fullfill her childhood dream.`

let txtContact = `<br>Email: chengiris66@gmail.com<br><br>Phone: 858-221-3080`;
let txtEduction = `<br>2019 Certification of Full-Stack Web Development<br>UCSD Extension, San Diego, CA<br>
                    <br>2005 Master of Science (Computer Vision and Image Processing)<br>Southern Illinois University Edwardsville, Edwardsville, IL<br>
                    <br>1996 Bachelor of Enginnering (Electrical Engineering)<br>Beijing University of Aeronautics and Astronautics, Beijing, China`;
let txtPast =`<br>2001-2016 Westar Display Technologies, Inc
              <br>~2013-2016 Field Support and Marketing in Asia, Beijing, China
              <br>~2001-2013 Electrical/Software Engineer, St. Charles, MO, U.S.A.`;
let previousClickedTab = "current";

$(document).on("click", ".nav-item", function (event) {
    event.preventDefault();

    let activeTab = $(event.currentTarget).attr("data-name").trim();
    console.log(activeTab);
    // console.log(event);

    switch (previousClickedTab) {
        // case "profile":
        //     $("#profile").removeClass("active");
        //     break;
        case "current":
            $("#current").removeClass("active");
            $(".current-item").attr("style", "width: 20rem; height: 26rem; display: none;");
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
        // case "profile":
        //     $("#content").html(txtProfile);
        //     $("#profile").addClass("active");
        //     break;
        case "current":
            $("#content").html("");
            $(".current-item").attr("style", "width: 20rem; height: 26rem;");
            $("#current").addClass("active");
            break;
        case "past":
            $("#content").html(txtPast);
            $("#past").addClass("active");
            break;
        case "education":
            $("#content").html(txtEduction);
            $("#education").addClass("active");
            break;
        case "contact":
            $("#content").html(txtContact);
            $("#contact").addClass("active");
            break;
        default:
    };
    previousClickedTab = activeTab;
});
