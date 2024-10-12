$(document).ready(function() {
    $('#mySidenav a').on('click', function(event) {
        $(this).parent().find('a').removeClass('active');
        $(this).addClass('active');
    });

    $(window).on('scroll', function() {
        $('section').each(function() {
            if ($(window).scrollTop() >= $(this).position().top) {
                var id = $(this).attr('id');
                $('#mySidenav a').removeClass('active');
                $('#mySidenav a[href=#' + id + ']').addClass('active');
            }
        });
    });

    $('li .bib').popover({
        html: true,
        title: function() {},
        content: function() {
            var vaL = '&#x2003;&#x2003;';
            var idValue = $(this).attr('href');
            return vaL + $(idValue).html();
        }
    });

    $('.bib').popover({
        html: true,
        title: function() {},
        content: function() {
            var idValue = $(this).attr('href');
            return $(idValue).html();
        }
    });

    $("a.bib").each(function(index) {
        var indVal = index + 1;
        var createId = $(this).attr('href').replace('#', '');
        $(this).attr('id', 'auto-' + createId + indVal);
    });

    $(".back-matter li").each(function(ind) {
        $('.bibUl li').each(function(i, value) {
            var num = i + 1;
            $(this).attr('value', '' + num);
        });
        var liId = $(this).attr('id');
        var liLabel = $(this).attr('value');
        var allLink = '<select class="bib-ref-num" aria-label="Jump to citation for reference '+liLabel+'" style="display:inline-block;"><option>Navigate to</option>';
        var linkValue = '';
        var count = 1;
        $("a.bib").each(function(index) {
            var createId = $(this).attr('href').replace('#', '');
            var aBibId = '#' + $(this).attr('id');
            if (liId == createId) {
                linkValue = $(this).text();
                allLink = allLink + "<option value='" + aBibId + "' aria-label='" + "citation " + count + " reference " + liLabel + "'>" + "citation " + count + "</option>";
                count++;
            }
        });
        var finalAllLinkSelect = " <span class='link-das'> </span>" + allLink + "</select>";
        if (linkValue != '') {
            $(this).append(finalAllLinkSelect);
        }
    });

    $('a').on('click', function() {
        var ahrefvalue = $(this).attr('href');
        var indValue = ahrefvalue.indexOf("bib");
        if (indValue > -1) {
            $('.bibUl li').css('background-color', '#FFFFFF');
            $('.bibUl li').css('margin-left', '0px');
            $('.bibUl li').css('padding-left', '0px');
            $('html, body').animate({
                scrollTop: $(ahrefvalue).offset().top
            }, 'slow');
            $(ahrefvalue).css('background-color', '#c1c1c1');
            $(ahrefvalue).css('margin-left', '-21px');
            $(ahrefvalue).css('padding-left', '21px');
        } else {
            $('html, body').animate({
                scrollTop: $(ahrefvalue).offset().top
            }, 'slow');
        }
    });

    $('.bib-ref-num').change(function() {
        var ahrefvalue = $(this).val();
        var indValue = ahrefvalue.indexOf("bib");
        var anchorID = ahrefvalue.replace("#","");
        if (indValue > -1) {
            $('html, body').animate({
                scrollTop: $(ahrefvalue).offset().top
            }, 'slow');
        } else {
            $('html, body').animate({
                scrollTop: $(ahrefvalue).offset().top
            }, 'slow');
        }
        $('a[id=' + anchorID + ']').focus();
    });

    $('.fn').popover({
        html: true,
        title: function() {},
        content: function() {
            var idValue = $(this).attr('href');
            return $(idValue).html();
        }
    });

});