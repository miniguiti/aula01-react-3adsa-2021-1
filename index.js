//Busca nossa div no html
// var container = document.getElementById("app");
// //cria um h1
// var titulo = document.createElement("h1");

// //atribui um valor a esse h1
// titulo.innerHTML = "<p></p>";

// //colocando o titulo na div add
// container.appendChild(titulo);
// var subtitulo = document.createElement("h2");
// subtitulo.innerHTML = "Esse texto também!"
// container.appendChild(subtitulo);

//_____________________________
//E com react ?
var container = document.getElementById("app");

function App(props) {
    return (
        <React.Fragment>
            <h2>{props.titulo}</h2>
        </React.Fragment>
    );
}

ReactDOM.render(React.createElement(App, {titulo:"Esse titulo veio de uma prop :o"}, null), container);

//Componentes seguem o padrão PascalCase
//Só posso retornar um elemento jsx por componente (por isso React.Fragment)
//Componentes podem receber propriedades
