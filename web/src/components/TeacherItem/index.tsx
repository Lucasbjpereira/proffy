import React from 'react';

import './styles.css';

const whatsappIcon = require("../../assets/images/icons/whatsapp.svg");

function TeacherItem () {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/39745522?s=460&u=07bc5a35beb839a03ce6e9589edd0e1de8052590&v=4" alt="Lucas Pereira"/>
                    <div>
                        <strong>Lucas Pereira</strong>
                        <span>Química</span>
                    </div>
                    </header>

                    <p>
                    Entusiasta das melhores tecnologias de química avançada. <br/><br/>

                    Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
                    </p>

                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$ 80,00</strong>
                        </p>

                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    );
}

export default TeacherItem;