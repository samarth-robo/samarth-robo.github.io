function create_footer() {
    var f = document.getElementById('myfooter');
    console.log(f.innerHTML);
    const d = new Date();

    f.innerHTML = '<p>&copy; Samarth Manoj Brahmbhatt ' + d.getFullYear() + ', ' +
        '<a href="https://github.com/samarth-robo/samarth-robo.github.io" target="_blank">website</a> ' +
        'created using <a href="http://getbootstrap.com/" target="_blank">Bootstrap</a>.</p>'
} 