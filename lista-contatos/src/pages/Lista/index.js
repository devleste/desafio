import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import "./style.css"




function Lista() {
    const [contatos, setContatos] = useState([]);
    const [contatosFilter, setContatosFilter] = useState([]);
    const [filterGender, setFilterGender] = useState('');
    const [filterAgeMax, setFilterAgeMax] = useState(undefined);
    const [filterAgeMin, setFilterAgeMin] = useState(undefined);
    const [filterMonthBirth, setFilterMonthBirth] = useState('');
    const [filterLanguage, setFilterLanguage] = useState('');
    const [filterLanguageOptions, setFilterLanguageOptions] = useState([]);
    const [loading,setLoading]=useState(true);

    async function deletarContato(id) {
        if (window.confirm("Do you want to delete contact of id: " + id + '?')) {

            let contatoStorage = localStorage.getItem('contatos');
            if (contatoStorage != null) {
                contatoStorage = JSON.parse(contatoStorage)
                contatoStorage = contatoStorage.filter(r => r.id !== id)
                localStorage.setItem('contatos', JSON.stringify(contatoStorage));

                alert('Contact deleted!!')
                window.location.reload();
            }
        }
    }
    function idade(ano_aniversario, mes_aniversario, dia_aniversario) {
        let d = new Date();
        let ano_atual = d.getFullYear()
        let mes_atual = d.getMonth() + 1
        let dia_atual = d.getDate()

        ano_aniversario = +ano_aniversario
        mes_aniversario = +mes_aniversario
        dia_aniversario = +dia_aniversario

        let quantos_anos = ano_atual - ano_aniversario;

        if (mes_atual < mes_aniversario || (mes_atual === mes_aniversario && dia_atual < dia_aniversario)) {
            quantos_anos--;
        }

        return quantos_anos < 0 ? 0 : quantos_anos;
    }


    useEffect(() => {

        async function loadContatos(filterAgeMax, filterAgeMin, filterGender, filterLanguage, filterMonthBirth) {
            let tempContatos = [];
            if(contatos.length<=0){
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
                let tempFilterOptionsLanguage=[];
                tempContatos.forEach(c => {
                    if(tempFilterOptionsLanguage.indexOf(c.language)===-1){
                        tempFilterOptionsLanguage.push(c.language)
                    }
                });
                setContatos(tempContatos);
                setFilterLanguageOptions(tempFilterOptionsLanguage)
                setLoading(false)
            }else{
                tempContatos=contatos
            }
            
            if (filterAgeMax && filterAgeMin) {
                tempContatos = tempContatos.filter(c => {
                    let data = new Date(c.birthday)
                    let age = idade(data.getFullYear(), data.getMonth(), data.getDate())
                    return filterAgeMax >= age && filterAgeMin <= age
                })
            }

            if (filterMonthBirth !== '') {
                tempContatos = tempContatos.filter(c => {
                    let data = new Date(c.birthday)
                    return parseInt(filterMonthBirth) === data.getMonth() + 1
                })
            }

            if (filterGender !== '') {
                tempContatos = tempContatos.filter(c => {
                    return filterGender === c.gender
                })
            }

            if (filterLanguage !== '') {
                tempContatos = tempContatos.filter(c => {
                    return filterLanguage === c.language
                })
            }

            setContatosFilter(tempContatos.sort((a, b) => a.id - b.id));
            
        }

        loadContatos(filterAgeMax, filterAgeMin, filterGender, filterLanguage, filterMonthBirth);
    }, [filterAgeMax, filterAgeMin, filterGender, filterLanguage, filterMonthBirth])

    if(loading){
        return(
          <div className='loading'>
            <h2>Loading contacts...</h2>
          </div>
        )
      }

    return (
        <div className='p-3' >
            <h1 >Contact List</h1>
            <div className='mt-2'>
                <div className='row mb-2'>
                    <div style={{ backgroundColor: '#b6d6bc' }} className='col-12 form p-3 row'>
                        <h3 className='mb-2'>Filter</h3>
                        <div className='form-group col-2'>
                            <label>Gender</label>
                            <select onChange={(e) => { setFilterGender(e.target.value) }} className='form-control' value={filterGender}>
                                <option value="">Select a option</option>
                                <option value="M">Masculine</option>
                                <option value="F">Feminine</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                        <div className='form-group col-3'>
                            <label>Language</label>
                            <select onChange={(e) => { setFilterLanguage(e.target.value) }} className='form-control' value={filterLanguage}>
                                <option value="">Select a option</option>
                                {
                                filterLanguageOptions.map(language=>{
                                    return (
                                        <option value={language}>{language}</option>
                                    );
                                })
                                }
                            </select>
                        </div>
                        <div className='form-group col-3'>
                            <label>Birthday Month</label>
                            <select onChange={(e) => { setFilterMonthBirth(e.target.value) }} className='form-control' value={filterMonthBirth}>
                                <option value="">Select a option</option>
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option value="6">June</option>
                                <option value="7">July</option>
                                <option value="8">August</option>
                                <option value="9">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                        </div>
                        <div className='form-group col-2'>
                            <label>Minimum Age</label>
                            <input onChange={(e) => setFilterAgeMin(e.target.value)} type='number' className='form-control' value={filterAgeMin}></input>
                        </div>
                        <div className='form-group col-2'>
                            <label>Maximum Age</label>
                            <input onChange={(e) => setFilterAgeMax(e.target.value)} type='number' className='form-control' value={filterAgeMax}></input>
                        </div>
                    </div>
                    <div className='mt-3 col-12' >
                        <Link to="/add"><button style={{ float: 'right' }} className='btn btn-dark '>Add Contact +</button></Link>
                    </div>
                </div>
                <table className='table'>
                    <thead  className='thead-dark table-dark thead-contacts'>
                        <tr className='row'>
                            <th className='col-1 text-center'>ID</th>
                            <th className='col-1 text-center'>Avatar</th>
                            <th className='col-2 text-center'>Name</th>
                            <th className='col-2 text-center'>E-mail</th>
                            <th className='col-1 text-center'>Gender</th>
                            <th className='col-2 text-center'>Date of Birth</th>
                            <th className='col-1 text-center'>Language</th>
                            <th className='col-2 text-center'>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='tbody-contacts'>
                        {
                            contatosFilter.map(
                                contato => {
                                    let dataArray = contato.birthday.split('-');
                                    let dataFormatada = dataArray[2] + '/' + dataArray[1] + '/' + dataArray[0]
                                    return (
                                        <tr className='row' key={contato.id}>
                                            <td className='col-1 d-flex flex-column justify-content-center align-items-center'>{contato.id}</td>
                                            <td className='col-1 d-flex flex-column justify-content-center align-items-center' ><img className='img-perfil' src={contato.avatar} alt={'Foto de Perfil ' + contato.id} /></td>
                                            <td className='col-2 d-flex flex-column justify-content-center align-items-center' >{contato.first_name + " " + contato.last_name}</td>
                                            <td className='col-2 d-flex flex-column justify-content-center align-items-center'>{contato.email}</td>
                                            <td className='col-1 d-flex flex-column justify-content-center align-items-center'>{contato.gender === 'M' ? 'Masculine' : (contato.gender === 'F' ? 'Feminine' : 'Others')}</td>
                                            <td className='col-2 d-flex flex-column justify-content-center align-items-center'>{dataFormatada}</td>
                                            <td className='col-1 d-flex flex-column justify-content-center align-items-center'>{contato.language}</td>
                                            <td className='col-2 d-flex flex-column justify-content-center align-items-center'>
                                                {contato.localStorage != null ? <div>
                                                    <Link to={"/add/" + contato.id}><button className='btn btn-dark'>Edit</button></Link>
                                                    <button className='btn btn-danger m-2' onClick={(e) => { deletarContato(contato.id) }}>Delete</button>
                                                </div> : <div></div>
                                                }

                                            </td>
                                        </tr>
                                    );
                                }
                            )}
                    </tbody>
                </table>
            </div>
        </div>);
}
export default Lista;