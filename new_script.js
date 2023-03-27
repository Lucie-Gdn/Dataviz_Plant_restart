let nameS = document.getElementById('nameS')
let name = document.getElementById('name')
let image = document.getElementById("image")
let type = document.getElementById('type')

const img = async() => {

    let requestString =` https://perenual.com/api/species-list?page=1&key=sk-DTfs6421bb65a0fa7305`;

    let data = await fetch (requestString);
    console.log(data);

    let response = await data.json();
    console.log(response)
    
    response.data.forEach((plant) => {
    image.src=response.data[1].default_image.original_url
    name.textContent = `${response.data[1].common_name}`
    nameS.textContent = `${response.data[1].scientific_name}`
    //type.textContent = `${response.type}`

        const title = document.createElement('h2');
        title.innerText = plant.common_name;

        divData.appendChild(title);
    })
};
img()

// response.data.forEach (element, img())
