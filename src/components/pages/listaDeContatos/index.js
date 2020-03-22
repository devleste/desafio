import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './listaDeContatos.css';

export default function ListaDeContatos() {

  const [contatos, setContatos] = useState([])
  const [filtroLinguagem, setFiltroLinguagem] = useState([])
  const [filtroIdade, setFiltroIdade] = useState([])
  const [alerta, setAlerta]  = useState([])

  useEffect(() => {

    async function pegarContatos() {

        const response = localStorage.getItem("contatosApi");
        let ListaDeContatos = JSON.parse(response);
        setContatos(ListaDeContatos);

      }

      pegarContatos();
  
}, []);

  
//=============================================
    function filtrarFem(){

      const response = localStorage.getItem("contatosApi");
      let ListaDeContatos = JSON.parse(response);

      const newLista = ListaDeContatos.filter(person => person.gender == 'F');
      console.log(newLista);
      setContatos(newLista);

    }


    function filtrarMasc(){

      const response = localStorage.getItem("contatosApi");
      let ListaDeContatos = JSON.parse(response);

      const newLista = ListaDeContatos.filter(person => person.gender == 'M');

      console.log(newLista);
      setContatos(newLista);

    }

    function zerarFiltro(){

      const response = localStorage.getItem("contatosApi");
      let ListaDeContatos = JSON.parse(response);

      setContatos(ListaDeContatos);
      setFiltroLinguagem('');
      setFiltroIdade('');

    }
//=============================================


function filtrarLinguagem(e){

  var x = document.getElementById("msgErro");

  // Primeira letra maiúscula e o resto minúscula
  var letraFormatada = e.toLowerCase().replace(/(?:^|\s)\S/g, function(a) 
  { return a.toUpperCase(); });

  const response = localStorage.getItem("contatosApi");
  let ListaDeContatos = JSON.parse(response);

  let linguagemFiltrada = ListaDeContatos.filter(n => n.language == letraFormatada)

  // Mostra ou esconde o alert de erro 
  if(linguagemFiltrada.length == 0){
      x.style.display = "block";    
  }else{
    x.style.display = "none";
  }


  console.log(linguagemFiltrada)

  setContatos(linguagemFiltrada);

}

function formatData(data, obj, e, idadeOuMes){

    let data2 = String(data).split(' ');
    let days = String(data2[0]).split('-');
    let dataFormatada =  [days[2],"-", days[1],"-", days[0]];
    let dataFinal = dataFormatada[2]
  
  if(idadeOuMes == 'mes'){
  
    //separa a data e pega o mês
    //Se o mês(e) for igual ao mês(jan,fev...) selecionado retorna o OBJ 

    if(dataFinal == e){
      return obj;
    }else{
      return '';
    }

  }else if(idadeOuMes == 'idade'){

    //Pega o ano atual, subtrai pelo ano dataFormatada[0]
    let calendario = new Date;
    let anoAtual = calendario.getFullYear();
    let idadeDoContato = anoAtual - dataFormatada[0];

    if(idadeDoContato == e){
      return obj;
    }else{
      return '';
    }
    
  }


}

function FiltrarPorMesOuIdade(e, idadeOuMes){

  console.log("e =>", e)
  console.log("idadeMes: ", idadeOuMes)

  if(e != 0){

    let x = 0;
    let ArrayM = [];
    let ArrayX = [];
    
    const response = localStorage.getItem("contatosApi");

    let ListaDeContatos = JSON.parse(response);

    let mesFiltrado = ListaDeContatos.filter(n => n.birthday)

    console.log("MesFiltrado", e)

  
    ArrayM = mesFiltrado.map((info) => (
      formatData(info.birthday, info, e, idadeOuMes)
    ))

console.log(ArrayM)
      for(let i = 0; i < ArrayM.length; i++){

        if(ArrayM[i] != ''){
          ArrayX[x] = ArrayM[i]
          x++
        }

      }

   setContatos(ArrayX)
  }

}

async function deleteContact(id) {

  console.log(id)


  const response = localStorage.getItem("contatosApi");
  let ListaDeContatos = JSON.parse(response);


  let contato = ListaDeContatos.indexOf(ListaDeContatos.find(n => n.id == id))

  console.log(contato)

  ListaDeContatos.splice(contato, 1)
  localStorage.setItem("contatosApi", JSON.stringify(ListaDeContatos))

  setContatos(ListaDeContatos)
}

 return (

    <div className="container">
      <div className="card  mt-4 shadow-custom">
          <div className="card-body">

            <div class="jumbotron py-4 shadow-custom mb-2">
              <h1 class="display-4 text-center contato-h1">Lista de Contato</h1>
            </div>
            <div>
              <div className="alert alert-danger text-center" id="msgErro" style={{display: 'none'}}> Nenhum contato encontrado </div>
            </div>


  <a class="btn btn-outline-success" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Filtro <i class="fas fa-filter"></i></a>


<div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
    <div className="card shadow-custom " />
              <div  className="card-body " >


                <form>
                  <div class="form-group row">
               
                      <div className="col-md-3">
                        <h5>Filtrar por:</h5>

                        <div class="dropdown">
                          <button class="btn btn-success dropdown-toggle mb-3" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Gênero
                          </button>
                          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <a class="dropdown-item" href="#" onClick={filtrarFem}>Feminino</a>
                              <a class="dropdown-item" href="#" onClick={filtrarMasc}>Masculino</a>
                          </div>
                        </div>

                        <button type="button" class="btn btn-success mb-2" onClick={zerarFiltro}>Zerar filtro</button>

                        

                      </div>
                    

                      <div className="col-md-4">
                        <div class="input-group mb-3">
                          <input type="text" class="form-control" readonly aria-label="Recipient's username" aria-describedby="button-addon2" value={filtroLinguagem} onChange={(e)=> setFiltroLinguagem(e.target.value)} placeholder="linguagem"/>
                            <div class="input-group-append">
                              <button class="btn btn-outline-success" type="button" id="button-addon2" onClick={(e) =>  filtroLinguagem.length != 0 ? filtrarLinguagem(filtroLinguagem) :  setAlerta('')}><i class="fas fa-search"></i></button>
                            </div>
                          </div>

                         
                         
                        
                      </div>

                      <div className="col-md-2">
                      <div class="input-group mb-3">

                      <select class="custom-select" id="inputGroupSelect01" onChange={(e) => FiltrarPorMesOuIdade(e.target.value, 'mes')}>
                        <option value="0" selected>Mês</option>
                        <option value="01" >Janeiro</option>
                        <option value="02">Fevereiro</option>
                        <option value="03">Março</option>
                        <option value="04">Abril</option>
                        <option value="05">Maio</option>
                        <option value="06">Junho</option>
                        <option value="07">Julho</option>
                        <option value="08">Agosto</option>
                        <option value="09">Setembro</option>
                        <option value="10">Outubro</option>
                        <option value="11">Novembro</option>
                        <option value="12">Dezembro</option>
         
                
                      </select>
                        
                      </div>
                      </div>

                      <div className="col-md-3">
                     
                         
                      <div class="input-group mb-3">
                          <input type="number" class="form-control" aria-label="Recipient's username" aria-describedby="button-addon2" value={filtroIdade} onChange={(e)=> setFiltroIdade(e.target.value)} placeholder="Idade" min="0"/>
                            <div class="input-group-append">
                              <button class="btn btn-outline-success" type="button" id="button-addon2" onClick={(e) => FiltrarPorMesOuIdade(filtroIdade, 'idade')}><i class="fas fa-search"></i></button>
                            </div>
                          </div>


                      </div>


                    </div>
                 
                </form>
                <br/>

               

            

            
            </div>
    </div>
  </div>

 
</div>


            <div className="card shadow-custom mt-2">
              <div  className="card-body">

                <div className="table-responsive tabela-custom">
                  <table className="table table-sm  table-hover" >

                    <thead class="bg-dark text-white">
                      <tr className="text-center">
                        <th scope="col-md-2">Foto</th>
                        <th scope="col" >Id</th>
                        <th scope="col" >Nome</th>
                        <th scope="col" >Sobre Nome</th>
                        <th scope="col" >Email</th>
                        <th scope="col" >Gênero</th>
                        <th scope="col" > Linguagem</th>
                        <th scope="col" >Data de nascimento</th>
                        <th scope="col" >Operação</th>
                      </tr>
                    </thead>

                    <tbody id="filtro">
                      {contatos.map((info) => (
                        
                        <tr key={info.id} id={info.id}>
                          <td><img class="img-thumbnail p-0 m-0" src={info.avatar} /></td>
                          <td>{info.id} </td>
                          <td>{info.first_name}</td>
                          <td>{info.last_name}</td>
                          <td>{info.email}</td>
                          <td>{info.gender == 'M' ? info.gender = 'Masculino' :  info.gender = 'Feminino'}</td>
                          <td>{info.language}</td>
                          <td>{info.birthday}</td>
                          <td>
                              <div>
                                  <Link to={{pathname: `/EditarContatos/${info.id}`}}><button type="button" class="btn btn-sm btn-secondary mr-2"><i class="fas fa-edit"></i></button></Link>
                                  <button type="button" class="btn btn-sm btn-danger" onClick={()=>{deleteContact(info.id)}}><i class="fas fa-trash"></i></button>
                              </div>
                          </td>

                        </tr>
                      ))}

                    </tbody>
                  </table>

                </div>
            </div>
          </div>
        </div>
      </div>
   </div>

 );
}



