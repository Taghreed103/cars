var cars = [
    {
        name: 'model1',
        models: [
            {
                model: 'model20191',
                image: './images/image-1.png'
            },
            {
                model: 'model20192',
                image: './images/image-2.png'
            },
            {
                model: 'model20193',
                image: './images/image-3.png'
            },
            {
                model: 'model20193',
                image: './images/image-4.png'
            },
            {
                model: 'model20194',
                image: './images/model12.jpeg'
            },
        ],
    },
    {
        name: 'model2',
        models: [
            {
                model: 'model2020',
                image: './images/model16.jpg'
            },
            {
                model: 'model2020',
                image: './images/model4.jpg'
            },
            {
                model: 'model15',
                image: './images/model14.jpg'
            },
            {
                model: 'model2020',
                image: './images/model17.jpg'
            },
        ]
    },
    {
        name: 'model3',
        models: [
            {
                model: 'model2021',
                image: './images/model8.jpg' ,
            
            },
            {
                model: 'model2021',
                image: './images/model7.jpg',
            },
            {
                model: 'model2021',
                image: './images/model8.jpg',
            },
            {
                model: 'model2021',
                image: './images/model10.jpg',
            },
        ]
    }
]

var htmls = ''
var elements = []
cars.forEach((element, key) => {
    var items = ''
    element.models.forEach((model, index) => {
        items += `<ol>
                    <li>
                        <a id="imglink${index}${key}" class="dropdown-item${index} " style="cursor: pointer;" >${model.model}</a>
                    </li>
                </ol>`
        elements.push({ key: key, index: index })
    })
    htmls += `  <li>
                    <a class="dropdown-item" id="${element.name}" href = "#" >${element.name}</a>
                    <div class="div px-4">
                        `+ items + `
                    </div>
                </li> `

});

var models_dropdown_list = document.getElementById('model-dropdown-menu')
models_dropdown_list.innerHTML = htmls

var landing_section = document.getElementById('landing-section')
var landing_section_image = document.getElementById('landing_section_image')
var landing_section_image_show = document.getElementById('landing_section_image_show')
var about_section = document.querySelector('.landing img')
var navbarDropdownMenuLink = document.getElementById('navbarDropdownMenuLink')

elements.forEach(element => {
    let link = document.getElementById(`imglink${element.index}${element.key}`)
    link.addEventListener('click', function () {
        landing_section.classList.add('d-none')
        landing_section_image.classList.remove('d-none')
        landing_section_image_show.src = cars[element.key].models[element.index].image
        about_section.setAttribute('style', 'display: none !important;position: relative !important;')
        models_dropdown_list.classList.toggle('show')
    })
})

navbarDropdownMenuLink.addEventListener('click', function () {
    models_dropdown_list.classList.toggle('show')
})