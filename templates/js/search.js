function buscaProcesso() {
    document.getElementById("meudrop").classList.toggle("show");

    $(document).on("click", function(event){
        var $trigger = $(".dropdown2");
        if($trigger !== event.target && !$trigger.has(event.target).length){
            $(".dropdown-content").slideUp("fast");
        }
        else{
            $(".dropdown-content").slideDown("fast");
        }
    });
}

function filtroBuscaProcesso() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("meudrop");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
    } else {
        a[i].style.display = "none";
    }
    }
}
