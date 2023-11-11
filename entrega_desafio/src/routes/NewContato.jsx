
import './NewContato.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button"


const NewContato = () => {
  const navigate = useNavigate()

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('N');
  const [language, setLanguage] = useState('Portugues');
  const [birthday, setBirthday] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

  const createContato = async (e) => {
    e.preventDefault();
    const newContato = {
      id: uuidv4(),
      first_name: firstName,
      last_name: lastName,
      email,
      gender,
      language,
      birthday,
      avatar: avatarUrl,
    };


    const existingContatos = JSON.parse(localStorage.getItem('contatos')) || [];


    existingContatos.push(newContato);


    localStorage.setItem('contatos', JSON.stringify(existingContatos));

    navigate('/');
  };

  return (
    <div className='new-contato'>
      <h2>
        Criar novo contato
      </h2>
      <form onSubmit={(e) => createContato(e)}>
        <div className='form-control'>
          <label className='form-label' htmlFor="first_name">Nome:</label>
          <Input
            type="text"
            name='first_name'
            placeholder='Insira aqui o nome'
            id='first_name'
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div className='form-control'>
          <label className='form-label' htmlFor="last_name">Sobrenome:</label>
          <Input
            type="text"
            name='last_name'
            placeholder='Insira aqui o sobrenome'
            id='last_name'
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div className='form-control'>
          <label className='form-label' htmlFor="email">Email:</label>
          <Input
            type="email"
            name='email'
            placeholder='Insira aqui o email'
            id='email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="select-divs">
          <div className='form-select'>
            <label htmlFor="gender">Gênero:</label>
            <Select
              name='gender'
              id='genero'
              onValueChange={(e) => setGender(e)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Selecione o gênero" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="M">Masculino</SelectItem>
                <SelectItem value="F">Feminino</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className='form-select'>
            <label htmlFor="language">Idioma:</label>
            <Select
              name='language'
              id='idioma'
              onValueChange={(e) => setLanguage(e)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Selecione o idioma" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Ingles">Inglês</SelectItem>
                <SelectItem value="Espanhol">Espanhol</SelectItem>
                <SelectItem value="Mandarim">Mandarim</SelectItem>
                <SelectItem value="Portugues">Português</SelectItem>
                <SelectItem value="Italiano">Italiano</SelectItem>
                <SelectItem value="Fijian">Fijian</SelectItem>
                <SelectItem value="Latvian">Latvian</SelectItem>
                <SelectItem value="Mongolian">Mongolian</SelectItem>
                <SelectItem value="Zulu">Zulu</SelectItem>
                <SelectItem value="Assamese">Assamese</SelectItem>
                <SelectItem value="Burmese">Burmese</SelectItem>
                <SelectItem value="Luxembourgish">Luxembourgish</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className='form-control'>
          <label className='form-label' htmlFor="birthday">Nascimento:</label>
          <Input
            type="date"
            name='birthday'
            id='nascimento'
            onChange={(e) => setBirthday(e.target.value)}
            required
            className='input-data'
          />
        </div>

        <div className='form-control'>
          <label className='form-label' htmlFor="avatar">URL do Avatar:</label>
          <Input
            type="text"
            name="avatarUrl"
            id="avatarUrl"
            value={avatarUrl}
            onChange={(e) => setAvatarUrl(e.target.value)}
            required
            placeholder='Insira aqui a url de uma imagem'
          />
        </div>
        <Button type="submit" className="btn">
          Criar contato
        </Button>
      </form>
    </div>
  )
}

export default NewContato