import React from 'react'
import Layout from '../../layout/layout'
import './Adoptar.css'

export default function Adopta() {
    return (
    <Layout>
        <main className="main-content">
        <section className="adoption-section">
            <h1>¡Adopta una Mascota!</h1>
            <p>En PetShopbyTabuyOdin, promovemos la adopción responsable de animales.</p>
            <p>Al adoptar, das un hogar a una mascota necesitada y transformas su vida, y la tuya para siempre.</p>
            <p className="p-xq-adoptar" > ¿Por qué deberías adoptar?</p>
            <br/>
            <ul>
                <li>Salvas una vida</li>
                <li>Fomentas la responsabilidad animal</li>
                <li>Contribuyes a reducir el abandono de animales</li>
                <li>Ganas un amigo e integrante de la familia leal y amoroso</li>
            </ul>
        </section>

        <section className="adoption-process">
            <h2>Proceso de Adopción</h2>
            <p>Nuestro proceso de adopción es simple y está diseñado para garantizar el bienestar de las mascotas y las familias adoptantes:</p>
            <ul>
                <li>Visita las paginas de nuestros colaboradores y conoce a los animales disponibles para adopción.</li>
                <li>Completa una solicitud de adopción.</li>
                <li>Realizaremos una entrevista y verificación del hogar.</li>
                <li>Una vez aprobada,
                <br/><br/>
                <strong> ¡FELICIDADES POR EL NUEVO INTEGRANTE DE 4 PATITAS A TU FAMILIA!</strong></li>
            </ul>
        </section>
        
        <section className="colaboradores">
            <h2>Colaboradores de 4 patitas</h2>
            <p>Aquí podrás encontrar una gran cantidad de hermanitos gatunos y perrunos que necesitan encontrar a una familia que los quiera como merecen.</p>
            <ul>
                <li className="colaboradores-link"><a href="https://instagram.com/gatitosdebelgrano?igshid=MzRlODBiNWFlZA==">Gatitos de Belgrano</a></li>
                <li className="colaboradores-link"><a href="https://instagram.com/adopcionesalrescate?igshid=MzRlODBiNWFlZA==">Adopcion Al Rescate</a></li>
                <li className="colaboradores-link"><a href="https://instagram.com/adopciondegatoscaba?igshid=MzRlODBiNWFlZA==">Adopcion de Gatos CABA ARG</a></li>
                <li className="colaboradores-link"><a href="https://instagram.com/mascotasenadopcionargentina?igshid=MzRlODBiNWFlZA==">Mascotas en Adopcion Argentina</a></li>
                <li className="colaboradores-link"><a href="https://instagram.com/rescataditosenadopcionn?igshid=MzRlODBiNWFlZA==">Asociacion Rescataditos en Adopcion</a></li>
            </ul>
        </section>

    </main>
    
    
    </Layout>
    )
}
