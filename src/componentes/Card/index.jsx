import PropTypes from "prop-types";
import Code from "./assets/code.svg"
import Chat from "./assets/chat.svg"
import Share from "./assets/share.svg"
import "./styles.css"

export default function Card({id, imagemUrl, titulo, resumo, LinhasDeCodigo, compartilhamentos, comentarios, usuario}) {
    return (
        <article className="card" id={id}>
            <div className="card__imagem">
                <img src={imagemUrl} alt="Imagem do post" />
            </div>
            <div className="card__conteudo">
                <div className="conteudo__texto">
                    <h3>{titulo}</h3>
                    <p>{resumo}</p>
                </div>

                <div className="conteudo__rodape">
                    <ul>
                        <li><img src={Code} alt="códigos" />{LinhasDeCodigo}</li>
                        <li><img src={Share} alt="compatilhamento" />{compartilhamentos}</li>
                        <li><img src={Chat} alt="comentários" />{comentarios}</li>
                    </ul>

                    <div className="rodape__usuario">
                        <img src={usuario.imagem} alt="imagem do usúario" /> {usuario.nome}
                    </div>
                </div>
            </div>
        </article>
    )
}


// Intrução dada pelo chatGPT para o erro por passagem de parametro do Card(): "is missing in props validation"
Card.propTypes = {
    id: PropTypes.number.isRequired,
    imagemUrl: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    resumo: PropTypes.string.isRequired, // Resolvendo o erro
    LinhasDeCodigo: PropTypes.number.isRequired,
    compartilhamentos: PropTypes.number.isRequired,
    comentarios: PropTypes.number.isRequired,
    usuario: PropTypes.string.isRequired,
  };