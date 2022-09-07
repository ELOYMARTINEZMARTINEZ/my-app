import React from 'react'
import { Card } from './card'
import auto1 from "./assets/auto1.jpg";
import auto2 from "./assets/auto2.jpg";
import auto3 from "./assets/auto3.jpg";
import auto4 from "./assets/auto4.jpg";
import auto5 from "./assets/auto5.jpg";
import auto6 from "./assets/auto6.jpg";
import auto7 from "./assets/auto7.jpg";
import auto8 from "./assets/auto8.jpg";
import auto9 from "./assets/auto9.jpg";


export const Home = () => {
  return (
    <div>
        
        <main>
            
            <section class="py-5 text-center container">
            <div class="row py-lg-5">
                <div class="col-lg-6 col-md-8 mx-auto">
                <h1 class="fw-light">Album example</h1>
                <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                <p>
                    <a href="#" class="btn btn-primary my-2">Main call to action</a> <a href="#" class="btn btn-secondary my-2">Secondary action</a>
                </p>
                </div>
            </div>
            </section>

            <div class="album py-5 bg-light">
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <Card id = "/wallpaper/auto1" imagen = {auto1} descripcion = "Es un jugador de baloncesto estadounidense que actualmente pertenece a la plantilla de Los Angeles Lakers de la NBA. Con 2,06 metros de estatura, su posición es la de alero, pero su talento, versatilidad y poderío físico le permiten jugar tanto de base como de ala-pívot"/>
                <Card id = "/wallpaper/auto2" imagen = {auto2} descripcion = "Más conocido como Stephen Curry, es un jugador estadounidense de baloncesto que pertenece al equipo de los Golden State Warriors de la NBA. Con 1,88 metros de altura, juega en la posición de base."/>
                <Card id = "/wallpaper/auto3" imagen = {auto3} descripcion = "Es un jugador profesional de baloncesto estadounidense que actualmente milita en Los Angeles Lakers de la NBA. Mide 2,08 metros y juega en la posición de ala-pívot."/>
                <Card id = "/wallpaper/auto4" imagen = {auto4} descripcion = "Es un jugador profesional de baloncesto estadounidense que actualmente pertenece a la plantilla de los Brooklyn Nets de la NBA. Con 2,08 metros de altura, juega en la posición de alero. Fue campeón de la NBA y MVP de las finales en 2017 y 2018; campeón del mundo en 2010 y medalla de oro olímpica con la selección de Estados Unidos en 2012, 2016 y 2021"/>
                <Card id = "/wallpaper/auto5" imagen = {auto5} descripcion = "Es un jugador de baloncesto estadounidense que actualmente pertenece a la plantilla de los Philadelphia 76ers de la NBA. Con 1,96 metros de altura, juega en la posición de base o escolta. Es uno de los anotadores más prolíficos de la NBA y se ganó el reconocimiento como el mejor escolta de la liga,"/>
                <Card id = "/wallpaper/auto6" imagen = {auto6} descripcion = "Kyrie Andrew Irving (Melbourne, Victoria, Australia, 23 de marzo de 1992) es un jugador de baloncesto estadounidense que pertenece a la plantilla de Brooklyn Nets de la NBA. Con 1,88 metros de estatura, juega en la posición de base."/>
                <Card id = "/wallpaper/auto7" imagen = {auto7} descripcion = "Juan Ronel Toscano Anderson (19 de abril de 1993, Oakland, California, Estados Unidos) es un jugador de baloncesto mexicano-estadounidense que pertenece a la plantilla de Los Angeles Lakers de la NBA. Con 1,98 metros de altura juega en la posición de alero."/>
                <Card id = "/wallpaper/auto8" imagen = {auto8} descripcion = "Klay Alexander Thompson (Los Ángeles, California, 8 de febrero de 1990) es un jugador de baloncesto estadounidense que pertenece a la plantilla de los Golden State Warriors de la NBA. Con 1,98 metros de estatura juega en la posición de escolta."/>
                <Card id = "/wallpaper/auto9" imagen = {auto9} descripcion = "Giannis Ougko Antetokounmpo (en griego, Γιάννης Αντετοκούνμπο, pronunciación en griego: ʝanis adetokumbo/; Atenas, 6 de diciembre de 1994) es un baloncestista griego de ascendencia nigeriana que pertenece a la plantilla de los Milwaukee Bucks de la NBA."/>
                </div>
            </div>
            </div>
        </main>
    </div>
  )
}
