
// Show hidden section for step 1
    $(document).ready(function(){
        $(".hidden_section").hide();
        $("#venueDatabase").change(function(){
            if ($(this).is(":checked")) {
                $(".hidden_section").show(300);
            } else {
                $(".hidden_section").hide(300);
            }
        });
    });


// Show hidden section for step 3
    $(document).ready(function(){
        $(".hidden_section").hide();
        $("#RSVPRequired").change(function(){
            if ($(this).is(":checked")) {
                $(".hidden_section").show(300);
            } else {
                $(".hidden_section").hide(300);
            }
        });
    });



// -===  Range Slider 1 -==== //
const
    range1 = document.getElementById('range1'),
    tooltip1 = document.getElementById('tooltip1'),
    showTooltip1 = document.getElementById('showTooltip1'),
    setValue1 = () => {
        const
            newValue1 = Number((range1.value - range1.min) * 100 / (range1.max - range1.min)),
            newPosition1 = 16 - (newValue1 * 0.32);
        tooltip1.innerHTML = `<span class="tooltip_value">${range1.value} miles</span>`;
        showTooltip1.innerHTML = `<span class="tooltip_value">${range1.value} miles</span>`;
        tooltip1.style.left = `calc(${newValue1}% + (${newPosition1}px))`;
        document.documentElement.style.setProperty("--range-progress1", `calc(${newValue1}% + (${newPosition1}px))`);
    };
document.addEventListener("DOMContentLoaded", setValue1);
range1.addEventListener('input', setValue1);

// -===  Range Slider 2 -==== //
const
    range2 = document.getElementById('range2'),
    tooltip2 = document.getElementById('tooltip2'),
    showTooltip2 = document.getElementById('showTooltip2'),
    setValue2 = () => {
        const
            newValue2 = Number((range2.value - range2.min) * 100 / (range2.max - range2.min)),
            newPosition2 = 16 - (newValue2 * 0.32);
        tooltip2.innerHTML = `<span class="tooltip_value">${range2.value} miles</span>`;
        showTooltip2.innerHTML = `<span class="tooltip_value">${range2.value} miles</span>`;
        tooltip2.style.left = `calc(${newValue2}% + (${newPosition2}px))`;
        document.documentElement.style.setProperty("--range-progress2", `calc(${newValue2}% + (${newPosition2}px))`);
    };
document.addEventListener("DOMContentLoaded", setValue2);
range2.addEventListener('input', setValue2);

// ============================ Step Form JS======================= //

$(document).ready(function () {

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;

    setProgressBar(current);

    $(".next").click(function () {

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //Add Class Active
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({ 'opacity': opacity });
            },
            duration: 500
        });
        setProgressBar(++current);
    });

    $(".previous").click(function () {

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //Remove class active
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({ 'opacity': opacity });
            },
            duration: 500
        });
        setProgressBar(--current);
    });

    function setProgressBar(curStep) {
        var percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
        $(".progress-bar")
            .css("width", percent + "%")
    }

    $(".submit").click(function () {
        return false;
    })

});