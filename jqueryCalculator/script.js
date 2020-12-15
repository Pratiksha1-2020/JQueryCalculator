function push(num){
   $(".calc-display").val($('.calc-display').val() + num);
}


function equals() {
    $('.calc-display').val(eval($('.calc-display').val()));
}

function c() {
    $('.calc-display').val('');
}


function del() {
    value = $('.calc-display').val();
    $('.calc-display').val(value.substring(0, value.length - 1));
}

