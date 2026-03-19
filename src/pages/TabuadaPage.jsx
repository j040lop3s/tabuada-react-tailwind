import { useState } from "react";

const Tabuada = ( { numero, arrayNums } ) => {
    return (
        <div className="flex-1 flex flex-col items-center justify-center p-4 relative pt-20">
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
        <nav className="flex flex-col h-full w-28 bg-transparent shadow-[10px_0_15px_-3px_rgba(0,0,0,0.1)] z-20 pt-16">
            {arrayNums.map(n => (
                <button 
                key={n}
                onClick={ funcaoClick }
                value={n}
                className={`h-16 w-full flex items-center justify-center bg-[#585123] text-[#EEC170] border-y border-black/30 transition-all duration-300 ease-in-out cursor-pointer ${
                    buttonAtivo === n ? "translate-x-8 scale-y-110 shadow-xl z-30 brightness-125" : "hover:translate-x-4"
                }`}
                >{ n }</button>
            ))}
        </nav>
    );
};

const TabuadaPage = () => {
    const [ numero, setNumero ] = useState(0);
    const nums = [1,2,3,4,5,6,7,8,9,10];

    const handlerClick = (e) => {
        setNumero(Number(e.target.value));
    };

    return (
        <div className="flex h-screen w-full bg-linear-to-br from-[#F2A65A] to-[#F58549] font-typewriter overflow-hidden relative">
            <h1 className="absolute -right-10 top-1/2 -translate-y-1/2 rotate-90 text-8xl font-black text-slate-200/50 uppercase tracking-tighter pointer-events-none">Tabuada</h1>
            <NavButtons funcaoClick={handlerClick} arrayNums={nums} buttonAtivo={numero} />
            <Tabuada numero={numero} arrayNums={nums}/>
        </div>
    )
}

export default TabuadaPage;