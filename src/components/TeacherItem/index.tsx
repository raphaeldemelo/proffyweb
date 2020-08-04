import React from 'react';

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://scontent-gru2-1.cdninstagram.com/v/t51.2885-19/s320x320/73393239_2657542617640248_3207442355011452928_n.jpg?_nc_ht=scontent-gru2-1.cdninstagram.com&_nc_ohc=CL4IHrgWyi4AX_Qz8L_&oh=091036bd8625b89dd2a821402acb4dd0&oe=5F50FD4A" alt="Raphael de Melo" />
                <div>
                    <strong>Raphael de Melo</strong>
                    <span>Informática</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias
                <br /><br />
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
                Mais de 200.000 pessoas já passaram por uma das minhas explosões.
            </p>

            <footer>
                <p> Preço/hora <strong>R$ 80,00</strong> </p>

                 <button type="button">
                    <img src={whatsappIcon} alt="whatsapp" />
                        Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;