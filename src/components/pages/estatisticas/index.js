import React, {useEffect, useState} from 'react';

export default function Estatisticas(){

    const [totalFeminino, setTotalFeminino] = useState([])
    const [totalMasculino, setTotalMasculino] = useState([])
    const [linguagens, setLinguagens] = useState([])

    useEffect(() => {

        async function pegarContatos() {

            let qtdFeminino = 0
            let qtdMasculino = 0

            let arrayTemp = [];
    
            const response = localStorage.getItem("contatosApi");
            let ListaDeContatos = JSON.parse(response);

            ListaDeContatos.map(contatos => {

                if (contatos.gender === "F") qtdFeminino += 1;
                if (contatos.gender === "M") qtdMasculino += 1;

                filtrarLinguagens(arrayTemp, contatos.language);
     
            })
          
            setTotalFeminino(qtdFeminino)
            setTotalMasculino(qtdMasculino)
            setLinguagens(arrayTemp);

          }
    
          pegarContatos();
      
    }, []);

    function filtrarLinguagens(lista, lingua){

        let varItem = null;
        let index = null;

        lista.map((info, i) => { 

            if(info.lingua == lingua){

                index = i;

                varItem = info.lingua;
                
            }
            
        })
        
        if (varItem == null){
            lista.push({lingua:lingua, quantidade: 1});
        }else{
           
            lista[index].quantidade++;
        }

    }
        
    return(

        <div className="container">
            <div className="card card-body mt-4">

                <div class="jumbotron py-4">
                    <h1 class="display-4 text-center contato-h1">Estatisticas</h1>
                </div>

                <div className="card card-body">
                    <div className="row">
                        <div className="col-md-12 text-center">

                            <h6>Total de contatos do gênero Masculino: {totalMasculino}</h6>
                            <h6>Total de contatos do gênero Feminino: {totalFeminino}</h6>
                            <hr/>
                            
                            {linguagens.map((info) => (
                            
                                <p>{info.lingua} : {info.quantidade}</p>
                            
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>  
        
    );
    
}

