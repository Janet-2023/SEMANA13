let dogs = [
	{
		img: './imagenes/perro1.jpg',
		name: 'Cobu',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: 01,
	},
	{
		img: './imagenes/perro2.jpg',
		name: 'Hachi',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: 02,
	},
	{
		img: './imagenes/perro3.jpg',
		name: 'Manchas',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: 03,
	},
	{
		img: './imagenes/perro4.jpg',
		name: 'Doby',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: 04,
	},
	{
		img: './imagenes/perro5.jpg',
		name: 'Chester',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: 05,
	},
	{
		img: './imagenes/perro6.jpg',
		name: 'Harry',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: 06,
	},
	{
		img: './imagenes/perro7.jpg',
		name: 'Marley',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: 07,
	},
	{
		img: './imagenes/perro8.jpg',
		name: 'Benji',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: 08,
	},
];

const container = document.querySelector('.container');
console.log(container)

 const containerdog = document.querySelector('.containerdog');
console.log(containerdog)



dogs.map((dog)=>{
    console.log(dog)
    const collagedog = document.createElement('div');
    collagedog.innerHTML=
`
<div class = 'main'>
    <div>
        <img class="imag" src="lapiz.png" alt="" >Edit
        <img class="imag" src="x.jpg" alt="">Delete
    </div>

    <img class="imagen" src="${dog.img}" alt="">
    <h2>Nombre</h2>
    <h3>Telefono | correo</h3>
    <h4>Pais</h4>
    <p>About me about me about me about me about me about
    me about me about me about me about me about me</p>
</div>
`
console.log(collagedog)
containerdog.appendChild(collagedog)

})



