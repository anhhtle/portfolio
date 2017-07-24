$('#two').on('mouseenter', () => {
    $('#two .underline').removeClass('animation-remove-underline');
    $('#two .underline').addClass('animation-underline');
});

$('#two').on('mouseleave', () => {
    $('#two .underline').removeClass('animation-underline');
    $('#two .underline').addClass('animation-remove-underline');
});

$('#six').on('mouseenter', () => {
    $('#six .underline').removeClass('animation-remove-underline');
    $('#six .underline').addClass('animation-underline');
});

$('#six').on('mouseleave', () => {
    $('#six .underline').removeClass('animation-underline');
    $('#six .underline').addClass('animation-remove-underline');
});

$('#eleven').on('mouseenter', () => {
    $('#eleven .underline2').removeClass('animation-remove-underline');
    $('#eleven .underline2').addClass('animation-underline');
});

$('#eleven').on('mouseleave', () => {
    $('#eleven .underline2').removeClass('animation-underline');
    $('#eleven .underline2').addClass('animation-remove-underline');
});