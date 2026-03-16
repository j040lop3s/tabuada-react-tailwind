import { useState } from "react";

/* Página desenvolvida em React onde utilizo os
conceitos de componentização, props e renderização
de elementos com map().  

Distribuí as responsabilidades em dois componentes:
um que dispara a mudança de estado - buttons - e outro
que renderiza com base nessa mudança.

Componente renderizador 'Tabuada' recebe duas
props do componente 'App' - o estado e um array
com números de 0 a 10 - e renderiza uma tabela,
com semântica HTML clara para acessibilidade
e leitura. 

O componente 'NavButtons' recebe a função que
muda o estado e também o array com números de 0 a 10,
para renderizar em uma tag <nav/> a cadeia
de botões que recebem as interações do usuário.

O componente 'App' cria o estado e a array de números,
define a função de mudança de estado e retorna os componentes
acima, transferindo as respectivas props.*/


const Tabuada = ( { numero, arrayNums } ) => {
    return (
        <div className="flex-1 flex flex-col items-center justify-center p-4 relative">
            <table>
                <thead>
                    <tr>
                        <th colSpan="5" className="text-center font-bold text-4xl mb-12 text-[#585123] tracking-widest p-4">
                            Tabuada do { numero }
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {arrayNums.map((n) => (
                        <tr key={n} className="text-center text-2xl py-2 text-[#585123] transition-opacity duration-500">
                            <td>{numero}</td>
                            <td>x</td>
                            <td>{n}</td>
                            <td>=</td>
                            <td>{n*numero}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const NavButtons = ({ funcaoClick, arrayNums, buttonAtivo }) => {
    return (
        <nav className="flex flex-col h-full w-28 bg-transparent shadow-[10px_0_15px_-3px_rgba(0,0,0,0.1)] z-20">
            {arrayNums.map(n => (
                <button 
                key={n}
                onClick={ funcaoClick }
                value={n}
                className={`h-16 w-full flex items-center justify-center bg-[#585123] text-[#EEC170] border-y border-black/30 transition-all duration-300 ease-in-out cursor-pointer hover:translate-x-4 ${
                    buttonAtivo === n ? "translate-x-8 scale-y-110 shadow-xl z-30 brightness-125" : "hover:translate-x-4"
                }`}
                >{ n }</button>
            ))}
        </nav>
    );

};

const App = () => {

    const [ numero,setNumero ] = useState(1);
    const nums = [1,2,3,4,5,6,7,8,9,10];

    const handlerClick = (e) => {
        setNumero(Number(e.target.value));
    };

    return (
        <div className="flex h-screen w-full bg-gradient-to-br from-[#F2A65A] to-[#F58549] font-typewriter overflow-hidden">
            <h1 className="absolute -right-10 top-1/2 -translate-y-1/2 rotate-90 text-8xl font-black text-slate-200/50 uppercase tracking-tighter pointer-events-none">Tabuada</h1>
            <NavButtons funcaoClick={handlerClick} arrayNums={nums}/>
            <Tabuada numero={numero} arrayNums={nums}/>
        </div>
    )
}

export default App;