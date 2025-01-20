const filter_dropdowns = document.querySelectorAll('span');
const filter_headers = document.querySelectorAll('.filter_header');
const filter_contents = document.querySelectorAll('.filter_content');

function toggleFilterContent (filter) {
    if (filter.className.includes('open')) {
        filter.classList.remove('open');
    } else {
        filter.classList.add('open');
    }
}

function handleDropdown (e) {
    const id = e.target.attributes.id.value
    console.log(id);
    filter_headers.forEach(filter_header => {
        if (filter_header.attributes.id.value === id) {
            console.log(filter_header);
            toggleFilterContent(filter_header);
        }
    })
    filter_contents.forEach(filter_content => {
        if (filter_content.attributes.id.value === id) {
            console.log(filter_content);
            toggleFilterContent(filter_content);
        }
    })
}

filter_dropdowns.forEach( filter_dropdown => filter_dropdown.addEventListener('click', handleDropdown) );