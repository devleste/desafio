import { useEffect, useState } from 'react';

import "./style.css"
import { useNavigate,Link, useParams } from 'react-router-dom'

import robo1 from'../../assets/robo_1.jpg'
import robo2 from '../../assets/robo_2.jpg'
import robo3 from '../../assets/robo_3.webp'
import robo4 from'../../assets/robo_4.jpg'
import robo5 from'../../assets/robo_5.webp'
import robo6 from '../../assets/robo_6.jpg'
import robo7 from '../../assets/robo_7.jpg'

export default function FormContato() {
    const [email, setEmail] = useState('')
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [gender, setGender] = useState('Others')
    const [birthday, setBirthday] = useState('')
    const [language, setLanguage] = useState('Others')
    const [avatar, setAvatar] = useState('')
    const [isSubmitted,setIsSubmitted] = useState(false)
    const [isEdit,setIsEdit]=useState(false);
    const [id,setId]=useState(null)
    const {paramId}=useParams()
   

    const navigate = useNavigate();
    const linksAvatarPhoto=[
        robo1,
        robo2,
        robo3,
        robo4,
        robo5,
        robo6,
        robo7,
    ]
    function getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
      }
    async function onSubmit(e){
        e.preventDefault();
        if(!isSubmitted){
            
            
            let contatoStorage = localStorage.getItem('contatos');
            let urlPhotoAvatar=avatar;
            let idAddEdit=100;
            if(urlPhotoAvatar===''){
                alert('Choose a avatar !!')
                return;
            }
            if(contatoStorage!=null){
                contatoStorage=JSON.parse(contatoStorage)
                if(!isEdit){
                    contatoStorage.forEach(c=>{
                        if(c.id>idAddEdit){
                            idAddEdit=c.id
                        }
                    })
                }else{
                    idAddEdit=id;
                    //urlPhotoAvatar=avatar
                    contatoStorage=contatoStorage.filter(c=>c.id!==id)
                }
                 
            }
            
            setIsSubmitted(true);
            if(!isEdit || contatoStorage==null){
                if(contatoStorage==null){
                   contatoStorage=[]; 
                }
                idAddEdit+=1;

                //urlPhotoAvatar=avatar
            }
            
            contatoStorage.push({'id':idAddEdit,'email':email,'first_name':first_name,'last_name':last_name,gender:gender,birthday:birthday,language:language,avatar:urlPhotoAvatar,'localStorage':true})
            localStorage.setItem('contatos', JSON.stringify(contatoStorage));
            navigate('/', { replace: true })
            alert('Contact save!!')
        }
        
    }

    useEffect(()=>{
            async function loadContato(){
                if(paramId){
                    
                    let idTemp=parseInt(paramId)
                    
                    let contatoStorage = localStorage.getItem('contatos');
                    
                    if(contatoStorage!=null){
                        contatoStorage=JSON.parse(contatoStorage)
                        let contato=contatoStorage.find(c=>c.id===idTemp)
                        if(contato){
                            setIsEdit(true);
                            setId(idTemp)
                            setFirstName(contato.first_name)
                            setLastName(contato.last_name)
                            setEmail(contato.email)
                            setBirthday(contato.birthday)
                            setGender(contato.gender)
                            setLanguage(contato.language)
                            setAvatar(contato.avatar)
                        } 
                    }
                }
            }
            loadContato();
    },[paramId])


    return( 
    <div style={{backgroundColor:'#b6d6bc'}}>
        <div className='p-5 '>
            <h1>{isEdit?'Edit ':'Create '}Contact</h1>
            {/* <div className='col-12 mb-3' >
                        <Link to="/"><button style={{ float: 'right' }} className='btn btn-dark '>Lista de Contatos</button></Link>
                    </div> */}
            <div className='mt-3' >
            <form className="form row" onSubmit={onSubmit}>
                <div className='form-group col-3'>
                    <label>First Name</label>
                    <input  onChange={(e) => setFirstName(e.target.value)} type='text' required className='form-control' value={first_name}></input>
                </div>
                <div className='form-group col-3'>
                    <label>Last name</label>
                    <input onChange={(e) => setLastName(e.target.value)} type='text' required className='form-control' value={last_name}></input>
                </div>
                <div className='form-group col-3'>
                    <label>E-mail</label>
                    <input onChange={(e) => setEmail(e.target.value)} type='email' required className='form-control' value={email}></input>
                </div>
                <div className='form-group col-3'>
                    <label>Gender</label>
                    <select onChange={(e) => {setGender(e.target.value)}} className='form-control' value={gender}>
                            <option value="M">Masculine</option>
                            <option value="F">Feminine</option>
                            <option value="Others">Others</option>
                    </select>
                </div>
                <div className='form-group col-3'>
                    <label>Language</label>
                    {/* <input onChange={(e) => setLanguage(e.target.value)} type='text' required className='form-control' value={language}></input> */}
                    <select onChange={(e) => {setLanguage(e.target.value)}} className='form-control' value={language}>
                            <option value="German">German</option>
                            <option value="English">English</option>
                            <option value="Portuguese">Portuguese</option>
                            <option value="Spanish">Spanish</option>
                            <option value="French">French</option>
                            <option value="Others">Others</option>
                    </select>
                </div>
                <div className='form-group col-3'>
                    <label>Date of birth</label>
                    <input onChange={(e) => setBirthday(e.target.value)} type='date' required className='form-control' value={birthday}></input>
                </div>
                <div className=' mt-5 col-12 text-center'>
                    <h3 className='mb-4'>Avatars</h3>
                    {
                        linksAvatarPhoto.map(link=>{
                            return(
                                    <span onClick={(e)=> setAvatar(link)} className='p-3 py-5' style={{backgroundColor:avatar===link?'#a13ffc':'#9586a3', cursor:'pointer'}}><img className='img-perfil' src={link} alt={'Foto do avatar'} /></span>
                                    
                               
                            );
                        })
                    }
                    
                </div>
                <div className="col-12 mt-5">
                    <div className="submit text-center" ><input disabled={isSubmitted} className="button-atualizar" value={isEdit?'Update':'Create Contact'} type="submit"></input></div>
                </div>
                <div className='col-12 mt-3 text-center' >
                        <Link to="/"><button className='btn btn-default'>Return to Contact List</button></Link>
                    </div>
            </form>
            </div>

        </div>
    </div>);
}
