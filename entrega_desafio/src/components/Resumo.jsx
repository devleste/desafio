import './Resumo.css';
import PropTypes from 'prop-types';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Resumo = ({ contatos }) => {
  // Verifique se contatos está definido antes de calcular as contagens
  if (!contatos) {
    return null;
  }

  const countGender = contatos.reduce((acc, contato) => {
    acc[contato.gender] = (acc[contato.gender] || 0) + 1;
    return acc;
  }, {});

  const countLanguage = contatos.reduce((acc, contato) => {
    acc[contato.language] = (acc[contato.language] || 0) + 1;
    return acc;
  }, {});

  const genderOptions = Object.keys(countGender).map((gender) => (
    <SelectItem key={gender} value={gender}>
      {gender} : {countGender[gender]}
    </SelectItem>
  ));

  const languageOptions = Object.keys(countLanguage).map((language) => (
    <SelectItem key={language} value={language}>
      {language} : {countLanguage[language]}
    </SelectItem>
  ));

  return (
    <div className="resumo">
      <h2>Quantidades</h2>
      <div className='resumos'>
        <div className="resumo-item">
          <h3>Quantidades por gênero</h3>
          <Select className="custom-select">
            <SelectTrigger>
              <SelectValue placeholder="Veja os gêneros" />
            </SelectTrigger>
            <SelectContent style={{ top: 'calc(100%)', left: 0, marginTop: '-4px' }}>
              {genderOptions}
            </SelectContent>
          </Select>
        </div>
        <div className="resumo-item">
          <h3>Quantidades por linguagem</h3>
          <Select className="custom-select">
            <SelectTrigger>
              <SelectValue placeholder="Veja os idiomas" />
            </SelectTrigger>
            <SelectContent style={{ top: 'calc(200%)', left: 0, marginTop: '-200px' ,margin:'0px'}}>
              {languageOptions}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

Resumo.propTypes = {
  contatos: PropTypes.object.isRequired,
};

export default Resumo;
