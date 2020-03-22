import React, {useEffect, useState} from 'react';

export default function Estatisticas(){

    const [contatos, setContatos] = useState([])
    const [totalFeminino, setTotalFeminino] = useState([])
    const [totalMasculino, setTotalMasculino] = useState([])
    const [linguagens, setLinguagens] = useState([])

    useEffect(() => {

        async function pegarContatos() {

            let qtdFeminino = 0
            let qtdMasculino = 0
    
            const response = localStorage.getItem("contatosApi");
            let ListaDeContatos = JSON.parse(response);

            ListaDeContatos.map(contatos => {
                if (contatos.gender === "F") qtdFeminino += 1;
                if (contatos.gender === "M") qtdMasculino += 1;
            })

            setTotalFeminino(qtdFeminino)
            setTotalMasculino(qtdMasculino)

            console.log(ListaDeContatos);

          }
    
          pegarContatos();
      
    }, []);
        
        return(

            <div>
                <div className="container">

                    <div className="card  mt-4 shadow-custom">
                        <div className="card-body">

                    <div class="jumbotron py-4 shadow-custom">
                        <h1 class="display-4 text-center contato-h1">Estatisticas</h1>
                    </div>

                        <div className="card shadow-custom">

                            <div className="card-body">
                                <div className="row">

                                    <div className="col-md-12">
            
                                        <h6>Total de contatos do gênero Masculino: {totalMasculino}</h6>
                                        <h6>Total de contatos do gênero Feminino: {totalFeminino}</h6>
                                       
                                    </div>
                                    
                                </div>
                                    <hr/>

                            </div>

                        </div>
                    </div>
                 </div>
            </div>  
        </div>

    );
    
}

