function toggle_summable_field_format() {
    format = $('custom_field_field_format');
    p_summable = $('custom_field_summable');
    p_listed = $('custom_field_listed');

    switch (format.value) {
        case 'int':
        case 'float':
            Element.show(p_summable.parentNode);
            break;
        case 'bool':
            Element.hide(p_summable.parentNode);
            break;
        default:
            Element.hide(p_summable.parentNode);
            Element.show(p_listed.parentNode);
            break;
    }
}
