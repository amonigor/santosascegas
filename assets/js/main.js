$(document).ready(function () {
    // Load settings from local storage
    const font = localStorage.getItem("font");
    const theme = localStorage.getItem("theme");
    const size = localStorage.getItem("size");

    if (font == "default" || font == null) {
        $("#defaultFontLabel").addClass("selected");
        $("#dyslexicFontLabel").removeClass("selected");
        $(document.body).addClass("default-font");
        $(document.body).removeClass("dyslexic-font");
    } else if (font == "dyslexic") {
        $("#dyslexicFontLabel").addClass("selected");
        $("#defaultFontLabel").removeClass("selected");
        $(document.body).addClass("dyslexic-font");
        $(document.body).removeClass("default-font");
    }

    if (theme == "default" || theme == null) {
        $(document.body).addClass("default-font");
    } else if (theme == "dark") {
        $("#darkmode").prop("checked", true);
        $(document.body).addClass("dark-theme");
        $(document.body).removeClass("default-theme");
    } else if (theme == "highcontrast") {
        $("#highcontrast").prop("checked", true);
        $(document.body).addClass("highcontrast-theme");
        $(document.body).removeClass("default-theme");
    }

    if (size == "default" || size == null) {
        $("#regularFont").addClass("selected");
        $(document.body).addClass("default-font-size");
    } else if (size == "large") {
        $("#largeFont").addClass("selected");
        $("#regularFont").removeClass("selected");
        $(document.body).addClass("large-font-size");
        $(document.body).removeClass("default-font-size");
    } else if (size == "extra-large") {
        $("#extraLargeFont").addClass("selected");
        $("#regularFont").removeClass("selected");
        $(document.body).addClass("extra-large-font-size");
        $(document.body).removeClass("default-font-size");
    }

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
            localStorage.setItem("font", "default");

        } else if (type == "dyslexic") {
            $("#dyslexicFontLabel").addClass("selected");
            $("#defaultFontLabel").removeClass("selected");
            $(document.body).addClass("dyslexic-font");
            $(document.body).removeClass("default-font");
            localStorage.setItem("font", "dyslexic");
        }
    });

    $("#darkmode").change(function () {
        if ($("#darkmode").is(":checked")) {
            $("#highcontrast").prop("checked", false);
            $(document.body).addClass("dark-theme");
            $(document.body).removeClass("highcontrast-theme");
            $(document.body).removeClass("default-theme");
            localStorage.setItem("theme", "dark");
        } else {
            $(document.body).addClass("default-theme");
            $(document.body).removeClass("dark-theme");
            localStorage.setItem("theme", "default");
        }
    });
    $("#highcontrast").change(function () {
        if ($("#highcontrast").is(":checked")) {
            $("#darkmode").prop("checked", false);
            $(document.body).addClass("highcontrast-theme");
            $(document.body).removeClass("dark-theme");
            $(document.body).removeClass("default-theme");
            localStorage.setItem("theme", "highcontrast");
        } else {
            $(document.body).addClass("default-theme");
            $(document.body).removeClass("highcontrast-theme");
            localStorage.setItem("theme", "default");
        }
    });

    $("#regularFont").click(function () {
        $(this).addClass("selected");
        $("#largeFont").removeClass("selected");
        $("#extraLargeFont").removeClass("selected");
        $(document.body).addClass("default-font-size");
        $(document.body).removeClass("large-font-size");
        $(document.body).removeClass("extra-large-font-size");
        localStorage.setItem("size", "default");
    });
    $("#largeFont").click(function () {
        $(this).addClass("selected");
        $("#regularFont").removeClass("selected");
        $("#extraLargeFont").removeClass("selected");
        $(document.body).addClass("large-font-size");
        $(document.body).removeClass("default-font-size");
        $(document.body).removeClass("extra-large-font-size");
        localStorage.setItem("size", "large");
    });
    $("#extraLargeFont").click(function () {
        $(this).addClass("selected");
        $("#regularFont").removeClass("selected");
        $("#largeFont").removeClass("selected");
        $(document.body).addClass("extra-large-font-size");
        $(document.body).removeClass("default-font-size");
        $(document.body).removeClass("large-font-size");
        localStorage.setItem("size", "extra-large");
    });
});