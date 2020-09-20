window.onload = function () {

    $('.content-dropdown p').click(function () {
        const property = $(this).parent().parent().attr('id')
        const value = $(this).html().toLowerCase()

        alterProperty(property, value)
    })
}

function alterProperty(prop, value) {
    $('.content').css(prop, value).css().css()
}