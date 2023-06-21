import React from 'react';
import './Slider.css';

function Slider() {
    return (
        <>
            <div id="carouselExampleControls" class="carousel slide" data-mdb-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://d-themes.com/react/molla/demo-10/images/home/sliders/slide-1.jpg" class="d-block" alt="Wild Landscape" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://media.istockphoto.com/id/1488135744/photo/handmade-raffia-mules-sustainable-ethically-made-pair-of-slippers-responsibly-sourced-shoes.jpg?s=612x612&w=0&k=20&c=7srj5DhLVrdkB3uXOihIHFSTcDsFJ1EQDESQHkt3A58=" class="d-block" alt="Camera" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://media.istockphoto.com/id/1152527286/photo/boutique-shoes-in-a-store.jpg?s=612x612&w=0&k=20&c=-_8nvBm9UrJW65mZxROh7Nz6BfZEk7APnffzrNRwgkQ=" class="d-block" alt="Exotic Fruits" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://media.istockphoto.com/id/1387639891/photo/flip-flops-floating-on-studio-background.jpg?s=612x612&w=0&k=20&c=HpMzYOluCaqOuNrveHUVGjq0heilLWajLx-rCNkrQEU=" class="d-block" alt="Exotic Fruits" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://media.istockphoto.com/id/1407127841/photo/white-sneaker-with-colored-accents-on-a-green-gradient-background-mens-fashion-sport-shoe-air.jpg?s=612x612&w=0&k=20&c=h4PYQPT0vzv3QOgAHql4eSdbnfHdmgm5ewURKdzqk6c=" class="d-block" alt="Exotic Fruits" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}

export default Slider