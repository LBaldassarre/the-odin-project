
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
    fullLibrary.push(newBook);
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
    const ownedColor = book.owned ? 'green' : 'black';
    const readColor = book.read ? 'green' : 'black';
    const bookHTML = 
        `
        <div class="book">
            <div class="main_pane">
                <div class="cover">
                    <img src="${book.cover_image}" alt="cover">
                </div>
                <div class="owned">
                    <span style="color:${ownedColor};" class="material-symbols-outlined">book_4_spark</span>
                </div>
                <div class="read">
                    <span style="color:${readColor};" class="material-symbols-outlined">menu_book</span>
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
        object.classList.add('open');
    }
}

function addFilterValues () {
    filter_contents_values.forEach(filter => {
        switch(filter.attributes.id.value){
            case '1':
                let ownedHTML = '<ul>'
                owned.forEach(value => {
                    ownedHTML += `\n <li id="1" class="filter_item"> <span>${value}</span> <input type="checkbox" id="1"> </input> </li>`
                });
                ownedHTML += '\n </ul>'
                filter.innerHTML = ownedHTML;
                break;
            case '2':
                let readHTML = '<ul>'
                read.forEach(value => {
                    readHTML += `\n <li id="2" class="filter_item"> <span>${value}</span> <input type="checkbox" id="2">  </input> </li>`
                });
                readHTML += '\n </ul>'
                filter.innerHTML = readHTML;
                break;
            case '3':
                let categoriesHTML = '<ul>'
                categories.forEach(value => {
                    categoriesHTML += `\n <li id="3" class="filter_item"> <span>${value}</span> <input type="checkbox" id="3"> </input> </li>`
                });
                categoriesHTML += '\n </ul>'
                filter.innerHTML = categoriesHTML;
                break;
            case '4':
                let authorsHTML = '<ul>'
                authors.forEach(value => {
                    authorsHTML += `\n <li id="4" class="filter_item"> <span>${value}</span> <input type="checkbox" id="4"> </input> </li>`
                });
                authorsHTML += '\n </ul>'
                filter.innerHTML = authorsHTML;
                break;
            default:
                console.log('Upps, wrong id given');    
        }
    })
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

function getFilters(book) {
    owned.push(book.owned);
    read.push(book.read);
    authors.push(book.author);
    categories.push(book.category);
}

async function generalPopulate() {
    library.forEach(book => {
        getFilters(book);
        populateMain(book);
    });
}

async function uniqueFilters() {
    owned = [...new Set(owned)];
    read = [...new Set(read)];
    authors = [...new Set(authors)];
    categories = [...new Set(categories)];
}

async function InitialLoad() {
    await loadBooks();
    await generalPopulate();
    await uniqueFilters()
        .then(addFilterValues());
}

async function filterLibrary() {
    library = fullLibrary;
    let filterArray = [[], [], [], []];
    filter_items.forEach(item => {
        let id = item.attributes.id.value;
        let checked = item.children[1].checked;
        let value = item.children[0].innerHTML;
        if(checked) {filterArray[id-1].push(value)};
    })

    if(filterArray[0].length > 0) {
    library = library.filter(book => filterArray[0].includes(book.owned.toString()))
    }
    if(filterArray[1].length > 0) {
        library = library.filter(book => filterArray[1].includes(book.read.toString()))
    }
    if(filterArray[2].length > 0) {
        library = library.filter(book => filterArray[2].includes(book.category))
    }
    if(filterArray[3].length > 0) {
        library = library.filter(book => filterArray[3].includes(book.author))
    }
    
    main.innerHTML = '';
    await generalPopulate()
        .then(() => {
            filter_items = document.querySelectorAll('.filter_item');
            filter_items.forEach(item => {
                item.addEventListener('click', () => {
                    filterLibrary();
                })
            })
            info_panes = document.querySelectorAll('.info_pane');
            info_buttons = document.querySelectorAll('.info_button');
            info_buttons.forEach( info_button => info_button.addEventListener('click', handleInfoPane) );
        });
}

async function mainFunc () {
    await InitialLoad()
    .then(() => {
        filter_items = document.querySelectorAll('.filter_item');
        filter_items.forEach(item => {
            item.addEventListener('click', () => {
                filterLibrary();
            })
        })
        info_panes = document.querySelectorAll('.info_pane');
        info_buttons = document.querySelectorAll('.info_button');
        info_buttons.forEach( info_button => info_button.addEventListener('click', handleInfoPane) );
    })
    .then(console.log('ready'))
}

function handleAddBookBtn (e) {
    if (!add_book_container.className.includes('open')){
        add_book_container.classList.add('open');
        add_book_form.classList.add('open');
    } else {
        add_book_container.classList.remove('open');
        add_book_form.classList.remove('open'); 
    }
}

function handleCoverInput (e) {
    if (e?.target?.files && e.target.files[0]) {
        add_book_cover_img.src = URL.createObjectURL(e.target.files[0]);
    }
}

function handleAddBookSubmit (e) {
    e.preventDefault();
    console.log('submit');
}

const filters = document.querySelectorAll('.filter');
const filter_dropdowns = document.querySelectorAll('.dropdown');
filter_dropdowns.forEach( 
    filter_dropdown => filter_dropdown.addEventListener('click', handleDropdown) 
);
const filter_headers = document.querySelectorAll('.filter_header');
const filter_contents = document.querySelectorAll('.filter_content');
const filter_contents_values = document.querySelectorAll('.filter_content_values');
const main = document.querySelector('main'); 
const add_book_container = document.querySelector('.add_book_container');
const add_book_form = document.querySelector('.add_book_form');
add_book_form.addEventListener('submit', handleAddBookSubmit);
const add_book_btn = document.querySelector('.add_book_btn');
add_book_btn.addEventListener('click', handleAddBookBtn);
const form_btn_close = document.querySelector('.form_btn_close');
form_btn_close.addEventListener('click', handleAddBookBtn);
const add_book_cover_input = document.querySelector('.input_cover');
const add_book_cover_img = document.querySelector('.img_cover');
add_book_cover_input.addEventListener('change', handleCoverInput);



let owned = [];
let read = [];
let authors = [];
let categories = [];
let library = [];
let fullLibrary = [];
let filter_items;
let info_panes;
let info_buttons;



mainFunc();