import { useEffect, useState } from 'react';
import api from '../../services/api';
import "./style.css"

export default function Analise() {
    const [analiseContatosGender, setAnaliseContatosGender] = useState([]);
    const [analiseContatosLanguage, setAnaliseContatosLanguage] = useState([]);
    const [totalNumberContatos,setTotalNumberContatos]=useState(null);
    const [loading,setLoading]=useState(true);


    useEffect(() => {
        async function loadContatos() {
            let tempContatos = [];
            try {
                const response = await api.get("")
                tempContatos = response.data;
            } catch (e) {
            }

            let contatoStorage = localStorage.getItem('contatos');
            if (contatoStorage != null) {
                contatoStorage = JSON.parse(contatoStorage)
                tempContatos = tempContatos.concat(contatoStorage)
            }
            let tempGenders = {};
            let tempLanguages = {};
            setTotalNumberContatos(tempContatos.length)
            tempContatos.forEach(c => {
                if (tempGenders[c.gender] !== undefined) {
                    tempGenders[c.gender] += 1
                } else {
                    tempGenders[c.gender] = 1
                }

                if (tempLanguages[c.language] !== undefined) {
                    tempLanguages[c.language] += 1
                } else {
                    tempLanguages[c.language] = 1
                }
            });
            let tempGendersArray=[];
            let tempLanguagesArray=[];
            Object.keys(tempGenders).forEach(
                g=>{
                    tempGendersArray.push({key:g,value:tempGenders[g]})
                }
            )
            Object.keys(tempLanguages).forEach(
                l=>{
                    tempLanguagesArray.push({key:l,value:tempLanguages[l]})
                }
            )
            tempGendersArray.sort((a,b)=>b.value-a.value)
            tempLanguagesArray.sort((a,b)=>b.value-a.value)
            setAnaliseContatosGender(tempGendersArray)
            setAnaliseContatosLanguage(tempLanguagesArray)
            setLoading(false)

        }

        loadContatos()

    }, [])

    if(loading){
        return(
          <div className='loading'>
            <h2>Loading contact analysis...</h2>
          </div>
        )
      }

    return (
        <div className='p-5'>
            <h1 >Contact Analysis</h1>
            <div className='mt-5 row'>
                <div className='col-5 mr-3'>
                <h2 className='text-center mb-3'>Analysis of the number of contacts by Gender</h2>
                    <table className='table'>
                        <thead className='thead-dark table-dark'>
                            <tr className='row'>
                                <th className='col-6 text-center'>Gender</th>
                                <th className='col-6 text-center'>Number of contacts</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                analiseContatosGender.map(
                                    gender=>{
                                        return(
                                            <tr className='row' key={gender.key}>
                                                 <td className='col-6 d-flex flex-column justify-content-center align-items-center'>{gender.key === 'M' ? 'Masculine' : (gender.key === 'F' ? 'Feminine' : 'Others')}</td>
                                                 <td className='col-6 d-flex flex-column justify-content-center align-items-center'>{gender.value}</td>
                                            </tr>
                                        )
                                    }
                                )
                            }
                            <tr className='row' key='total'>
                                <td className='col-6 d-flex flex-column justify-content-center align-items-center fw-bold'>Total</td>
                                <td className='col-6 d-flex flex-column justify-content-center align-items-center fw-bold'>{totalNumberContatos}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='col-2'></div>
                <div className='col-5'>
                    <h2 className='text-center mb-3'>Analysis of the number of contacts by Language</h2>
                    <table className='table'>
                        <thead className='thead-dark table-dark thead-contacts'>
                            <tr className='row'>
                                <th className='col-6 text-center'>Language</th>
                                <th className='col-6 text-center'>Number of contacts</th>
                            </tr>

                        </thead>
                        <tbody className='tbody-contacts'>
                            {
                                analiseContatosLanguage.map(
                                    language=>{
                                        return(
                                            <tr className='row' key={language.key}>
                                                 <td className='col-6 d-flex flex-column justify-content-center align-items-center'>{language.key}</td>
                                                 <td className='col-6 d-flex flex-column justify-content-center align-items-center'>{language.value}</td>
                                            </tr>
                                        )
                                    }
                                )
                            }
                            <tr className='row' key='total'>
                                <td className='col-6 d-flex flex-column justify-content-center align-items-center fw-bold'>Total</td>
                                <td className='col-6 d-flex flex-column justify-content-center align-items-center fw-bold'>{totalNumberContatos}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    );

}