$(function () {


/*   FILTER FOR WORK BLOCKS */

  const filter = $("[data-filter]");
  filter.on("click", function(event) {
    event.preventDefault();

    const category = $(this).data('filter');
      if (category == 'all') {
        $("[data-category").removeClass('hide');
      } else {
        $("[data-category]").each(function() {
          const categoryItem = $(this).data('category');
            if (categoryItem != category) {
              $(this).addClass('hide');
            } else {
              $(this).removeClass('hide');
            }
        });
      } 
  });


  /* MODAL WINDOWS */

  const modalWindows = $("[data-modal]");
  const modalExit = $("[data-exit]");

  modalWindows.on("click", function(event) {
    event.preventDefault();
    const $this = $(this);
    const modalId = $this.data('modal');
    $(modalId).addClass('show');
    $("body").addClass('no-scroll');
  });

  modalExit.on("click", function(event) {
    event.preventDefault();
    const $this = $(this);
    const modalParent = $this.parents('.modal');
    modalParent.removeClass('show');
    $("body").removeClass('no-scroll');
  });
});