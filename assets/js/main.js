$(document).ready(function () {
    $(".date-check").change(function () {
        const id = $(this).data("id");
        const idParent = $(this).data("parent");

        // Set label color
        $(".date-label").each(function () {
            if ($(this).data("id") == id) {
                $(this).addClass("selected");
            } else {
                $(this).removeClass("selected");
            }
        });

        // Uncheck others checkboxes
        $(".date-check").each(function () {
            if ($(this).data("id") != id) {
                $(this).prop("checked", false);
            }
        });

        // Show the clear selection option
        $(".date-clear").each(function () {
            if ($(this).data("parent") == idParent) {
                $(this).show("fast");
            } else {
                $(this).hide("fast");
            }
        });

        $(".form-dates").each(function () {
            if ($(this).attr("id") != `dateBox${idParent}`) {
                $(this).hide("fast");
            }
        });
    });

    $(".date-clear").click(function () {
        $(".date-check").each(function () {
            $(this).prop("checked", false);
        });
        $(".date-label").each(function () {
            $(this).removeClass("selected");
        });
        $(".form-dates").each(function () {
            $(this).show("fast");
        });
        $(this).hide("fast");
    });

    $("#form").on("submit", function (evt) {
        evt.preventDefault();
        window.location.href = "consentimento.html";
    });

    // ACCESSABILITY
    $("#accessabilityCaller").click(function () {
        $("#accessabilityMenu").show("fast");
    });
    $("#accessabilityMenu").mouseleave(function() {
        $("#accessabilityMenu").hide("fast");
    });

    $(".font-check").change(function () {
        const type = $(this).data("type");
        
        if (type == "default") {
            $("#defaultFontLabel").addClass("selected");
            $("#dyslexicFontLabel").removeClass("selected");
            $(document.body).addClass("default-font");
            $(document.body).removeClass("dyslexic-font");
        } else if (type == "dyslexic") {
            $("#dyslexicFontLabel").addClass("selected");
            $("#defaultFontLabel").removeClass("selected");
            $(document.body).addClass("dyslexic-font");
            $(document.body).removeClass("default-font");
        }
    });
});