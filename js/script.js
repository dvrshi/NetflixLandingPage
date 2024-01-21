
function toggleVisibility(index) {
    var parasElement = document.getElementById('paras'+index)

    parasElement.style.display = (parasElement.style.display === 'none') ? 'block' : 'none';
}
