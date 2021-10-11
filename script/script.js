
let pets = [
    {
        type: 'Dog',
        pets_img: 'mickeydog',
        name: 'Meet Bebe',
        price: 'NGN20,000'
    },
    {
        type: 'Dog',
        pets_img: 'jack-dog',
        name: 'Meet Jack',
        price: 'NGN20,000'
    },
    {
        type: 'Dog',
        pets_img: 'luke',
        name: 'Meet Luke',
        price: 'NGN20,000'
    },
    {
        type: 'Dog',
        pets_img: 'jack-dog',
        name: 'Meet Jack',
        price: 'NGN20,000'
    },
    {
        type: 'Cat',
        pets_img: 'bob-cat',
        name: 'Meet Bob',
        price: 'NGN20,000'
    },
    {
        type: 'Cat',
        pets_img: 'nene-cat',
        name: 'Meet Lily',
        price: 'NGN20,000'
    },
    {
        type: 'Cat',
        pets_img: 'lucy-cat',
        name: 'Meet Lucy',
        price: 'NGN20,000'
    },
    {
        type: 'Cat',
        pets_img: 'nene-cat',
        name: 'Meet Nene',
        price: 'NGN20,000'
    },
    {
        type: 'Rabbit',
        pets_img: 'chris',
        name: 'Meet Ivy',
        price: 'NGN20,000'
    },
    {
        type: 'Bird',
        pets_img: 'birdy',
        name: 'Meet Birdy',
        price: 'NGN20,000'
    },
    {
        type: 'Fish',
        pets_img: 'navin',
        name: 'Meet Star',
        price: 'NGN20,000'
    },
    {
        type: 'Cameleon',
        pets_img: 'reptile',
        name: 'Meet Camo',
        price: 'NGN20,000'
    }
]

let petsSec = document.getElementById('pets-section');
let html = "";
pets.forEach(e => {
    html += `
        <div class="col-6 col-md-3 py-3">
            <div class=" img-gallery border border-1">
                <div class="pet-image pb-3">
                    <img src="/image/${e.pets_img}.jpg" alt="image" class="img-fluid">
                </div>
                <div class="text-center">
                    <p class="text-secondary">${e.type}</p>
                    <p class="text-secondary">${e.name}</p>
                    <p class="pt-4 fw-bold">${e.price}</p>
                </div>
            </div>                        
        </div>
    `
    console.log(e)

    petsSec.innerHTML = html
})

