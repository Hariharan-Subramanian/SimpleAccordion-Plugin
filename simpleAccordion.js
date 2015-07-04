(function() {
    var simpleAccordion = {
        init: function() {
            var $argumentObj, curObj, $accordcont;
            $argumentObj = $('.simple-accordion');
            var $this = this;
            $.each($argumentObj, function(key, value) {
                $accordcont = $(value);
                curObj = $accordcont.children().eq(1);
                $accordcont.attr('class', 'accordion-container accordion-arrow-left');
                curObj.addClass('accordion').slideUp();
                $this.bindEvents($accordcont.find('h2'))

            });
        },
        bindEvents: function(obj) {
            obj.on('click', this.expandAccordion);
        },
        expandAccordion: function(event) {
            var $accordObj = $('.accordion');
            var $this = $(this).parent();
            $accordObj.slideUp();
            $accordObj.parent().removeClass('accordion-arrow-down').addClass('accordion-arrow-left');
            if (!$this.find('.accordion').is(":visible")) {
                if ($this.find('.accordion').exists()) {
                    $this.find('.accordion').slideDown();
                }
                $this.removeClass('accordion-arrow-left').addClass('accordion-arrow-down');

            }

        }
    }
    simpleAccordion.init();
    $.fn.exists = function() {
        return this.length !== 0;
    }
})();
