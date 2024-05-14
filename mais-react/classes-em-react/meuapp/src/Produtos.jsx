import React from 'react'

// this.state:

// Para definirmos um estado reativo, definiremos ele no constructor da classe, definindo o estado e seu valor inicial, dentro de um objeto chamado this.state

// Como a classe é uma extensão de React.Component, devemos utilizar SEMPRE, o "super" dentro do constructor, e passar "props" dentro do super, para garantir que as propriedades sejam passadas à extensão.

// class Produtos extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             contar: 0,
//         }
//     }
//     render() {
//         return (
//             <>
//             <h1>Produtos</h1>
//             <p>{this.props.nome}</p>
//             </>
        
//         )
//     }
// }

// this.setState():

// o this.setState() é um método especial, utilizado para atualizarmos o this.state. Ele irá renderizar o componente, toda vez que for ativado.

// class Produtos extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             contar: 0,
//         }
//     }
//     render() {
//         return (
//             <>
//             <h1>Produtos</h1>
//             <p>{this.props.nome}</p>
//             <p>{this.state.contar}</p>
//             <button onClick={()=> this.setState((state)=>({
//                 contar: state.contar + 1
//             }))}>Adicionar um</button>
//             </>
        
//         )
//     }
// }

// Métodos na classe passados no onClick:

// Assim como no JavaScript puro, quando eu passo um callback dentro de uma chamada de evento, o contexto do this muda. Em JavaScript puro geralmente o this se tornaria o prório elemento html referente ao evento, mas como estamos lidando com JSX, o this se torna undefined.
// Para corrigir isso, precisamos fazer o bind desse método. Pode ser feito no constructor. Isso mudará para que o this fique sempre sendo a própria classe.

// class Produtos extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             contar: 0,
//         }
//         this.aumentarUm = this.aumentarUm.bind(this)
//     }

//     aumentarUm(){
//         this.setState((state)=>({
//             contar: state.contar + 1
//         }))
//     } 

//     render() {
//         return (
//             <>
//             <h1>Produtos</h1>
//             <p>{this.props.nome}</p>
//             <p>{this.state.contar}</p>
//             <button onClick={this.aumentarUm}>Adicionar um</button>
//             </>
        
//         )
//     }
// }

// Ciclo de vida:

// Assim como com o React.useEffect(), podemos executar códigos de acordo com o ciclo de vida do componente de classe.
// Para isso devemos utilizar métodos específicos que foram criados justamente para isso, existem diversos deles, mas 3 deles são esses abaixo:

class Produtos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contar: 0,
        }
        this.aumentarUm = this.aumentarUm.bind(this)
    }

    aumentarUm(){
        this.setState((state)=>({
            contar: state.contar + 1
        }))
    } 

    componentDidMount() {
        console.log('momento para realizar o fetch')
    }

    componentDidUpdate() {
        console.log('estado mudou = componente atualizou')
    }

    componentWillUnmount() {
        console.log('sempre que o componente é desmontado')
    }

    render() {
        return (
            <>
            <h1>Produtos</h1>
            <p>{this.props.nome}</p>
            <p>{this.state.contar}</p>
            <button onClick={this.aumentarUm}>Adicionar um</button>
            </>
        
        )
    }
}


export default Produtos