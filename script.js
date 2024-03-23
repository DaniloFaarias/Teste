class CilcoDeVida extends React.Component {
    constructor(props) {
        super(props);
        this.state = { contador: 0 };
        console.log('Construtor')
    }
    componentDidMount(){
        console.log('Componente foi montado ')
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Componente foi atualizado ');
        console.log('Estado anterior:', prevState);
        console.log('Estado atual;',  this.state);
        
    }
    componentWillUnmount(){
        console.log('Componente será desmotado')

    }
    incrementar = () => {
        this.setState({ contador: this.state.contador +1});
    };
    render () {
        console.log('Renderização')
        return React.createElement("div", null, 
        React.createElement("h1", null, "Contador: ", 
        this.state.contador),
        React.createElement("button", 
        {onClick: this.incrementar}, "Atualizar")
        );
}
}

const root =  ReactDOM.createRoot(document.querySelector("#root"));
root.render(React.createElement(CilcoDeVida)); 