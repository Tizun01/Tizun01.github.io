const products = document.querySelector('.products')
const filter = document.getElementById('filter')
const listItems = []

getData()

filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {

	const results = [{
        title:'Burger Mozzarella',
        price: 59000,
        image: 'bu1.png'
    },{
        title:'Burger Double Double',
        price: 58000,
        image: 'bu2.png'
    },{
        title:'Burger Tôm',
        price: 46000,
        image: 'bu3.png'
    },{
        title:'Burger Bulgogi',
        price: 43000,
        image: 'bu4.png'
    },{
        title:'Burger Gà Thượng Hạng',
        price: 45000,
        image: 'bu5.png'
    },{
        title:'Cơm Gà Nướng Góc Tư',
        price: 57000,
        image: 'com1.png'
    },{
        title:'Cơm Gà Nướng',
        price: 44000,
        image: 'com2.png'
    },{
        title:'Cơm Gà Sốt Đậu',
        price: 44000,
        image: 'com3.png'
    },{
        title:'Cơm Gà Viên',
        price: 45000,
        image: 'com4.png'
    },{
        title:'Gà Nướng 9 Miếng',
        price: 304000,
        image: 'ga1.png'
    },{
        title:'Gà Sốt Buffalo 9 Miếng',
        price: 304000,
        image: 'ga2.png'
    },{
        title:'Sp 1',
        price: 999,
        image: 'ga3.png'
    },{
        title:'Sp 1',
        price: 999,
        image: 'ga4.png'
    },{
        title:'Sp 1',
        price: 999,
        image: 'ga5.png'
    },{
        title:'Sp 1',
        price: 999,
        image: 'ga6.png'
    },{
        title:'Sp 1',
        price: 999,
        image: 'ga7.png'
    },{
        title:'Sp 1',
        price: 999,
        image: 'ga8.png'
    },{
        title:'Nước Cam',
        price: 27000,
        image: 'nuoc1.png'
    },{
        title:'7Up Dừa',
        price: 25000,
        image: 'nuoc2.png'
    },{
        title:'7Up Dưa',
        price: 25000,
        image: 'nuoc3.png'
    },{
        title:'Tornado Cashew',
        price: 25000,
        image: 'nuoc4.png'
    },{
        title:'Tornado Chocolate',
        price: 25000,
        image: 'nuoc5.png'
    }]

	// Clear products
	products.innerHTML = ''

	results.forEach((product) => {
		const div = document.createElement('div')
		div.setAttribute('class', 'product')
		listItems.push(div)

		div.innerHTML = `
			<img src="${product.image}" alt="">
			<div class="product-detail">
				<h4>${product.title.slice(0, 30)}</h4>
				<p>${product.price}đ</p>
			</div>
        `

		products.appendChild(div)
	})
}

function filterData(search) {
	listItems.forEach((item) => {
		if (item.innerText.toLowerCase().includes(search.toLowerCase())) {
			item.classList.remove('hide')
		} else {
			item.classList.add('hide')
		}
	})
}