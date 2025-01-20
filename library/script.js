
function Book (title, author, summary, category, number_of_pages, owned, read, cover_image) {
    this.title = title;
    this.author = author,
    this.summary = summary,
    this.category = category,
    this.number_of_pages = number_of_pages,
    this.owned = owned,
    this.read = read,
    this.cover_image = cover_image
}

function addNewBook (book) {
    const newBook = new Book(
        book.title,
        book.author,
        book.summary,
        book.category,
        book.number_of_pages,
        book.owned,
        book.read,
        book.cover_image
    )

    library.push(newBook);
}

async function loadBooks() {
    await fetch('./user_library.json')
            .then((response) => response.json())
            .then((json) => [...json.books])
            .then((books) => books.forEach(book => addNewBook(book)))
            .then(console.log('done'));
}

function populateMain(book) {
    const index = library.indexOf(book);
    const bookHTML = 
        `
        <div class="book">
            <div class="main_pane">
                <div class="cover">
                    <img src="${book.cover_image}" alt="cover">
                </div>
                <div class="owned">
                    <span class="material-symbols-outlined">book_4_spark</span>
                </div>
                <div class="read">
                    <span class="material-symbols-outlined">menu_book</span>
                </div>
                <div class="info">
                    <span id="${index}" class="material-symbols-outlined info_button">info</span>
                </div>
            </div>
            <div id="${index}" class="info_pane">
                <div class="general_info">
                    <div class="title">${book.title}</div>
                    <div class="author">${book.author}</div>
                    <div class="category">${book.category}</div>
                    <div class="summary">${book.summary}</div>
                </div>
                <div class="pages">Pages: ${book.number_of_pages}</div>
                <div class="edit">
                    <span class="material-symbols-outlined">border_color</span>
                </div>

            </div>
        </div>`;

        main.innerHTML += bookHTML;
}

function toggleContent (object) {
    if (object.className.includes('open')) {
        object.classList.remove('open');
    } else {
        console.log(object.classList);
        object.classList.add('open');
    }
}

function handleDropdown (e) {
    const id = e.target.attributes.id.value
    filters.forEach(filter => {
        if (filter.attributes.id.value === id) {
            toggleContent(filter);
        }
    })
    filter_headers.forEach(filter_header => {
        if (filter_header.attributes.id.value === id) {
            toggleContent(filter_header);
        }
    })
    filter_contents.forEach(filter_content => {
        if (filter_content.attributes.id.value === id) {
            toggleContent(filter_content);
        }
    })
}

function handleInfoPane (e) {
    const id = e.target.attributes.id.value
    console.log(id);
    info_panes.forEach(info_pane => {
        if (info_pane.attributes.id.value === id) {
            toggleContent(info_pane);
        } else {
            if (info_pane.className.includes('open')) {
                info_pane.classList.remove('open');
            }
        }
    })
}

async function loadContent() {
    await loadBooks();
    await library.forEach(book => populateMain(book));
}


let library = [];
loadContent().then(console.log('ready'));

const filters = document.querySelectorAll('.filter');
const filter_dropdowns = document.querySelectorAll('.dropdown');
const filter_headers = document.querySelectorAll('.filter_header');
const filter_contents = document.querySelectorAll('.filter_content');
const main = document.querySelector('main');
let info_panes;
let info_buttons;
document.addEventListener('DOMNodeInserted', () => {
    info_panes = document.querySelectorAll('.info_pane');
    info_buttons = document.querySelectorAll('.info_button');
    info_buttons.forEach( info_button => info_button.addEventListener('click', handleInfoPane) );
});

filter_dropdowns.forEach( filter_dropdown => filter_dropdown.addEventListener('click', handleDropdown) );