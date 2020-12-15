import React, { useEffect, useState } from 'react';

import { Container, Divider, LanguageCardGrid, GenderGridTitle, GenderGridBar, MaleBar, FemaleBar, NoData } from './styles';
import { useContacts } from '../../contexts/ContactsContext';

interface Language {
  name: string,
  count: number,
  percent: number,
}

const Statistics: React.FC = () => {
  const [languages, setLanguages] = useState<Language[]>([]);
  const [males, setMales] = useState(0);
  const [malesPercent, setMalesPercent] = useState(0);
  const [females, setFemales] = useState(0);
  const [femalesPercent, setFemalesPercent] = useState(0);
  const { contacts } = useContacts();

  useEffect(() => {
    let malesCount = 0;
    let femalesCount = 0;
    contacts.forEach(contact => {
      if (contact.gender === "F") femalesCount++;
      if (contact.gender === "M") malesCount++;
    });
    setMales(malesCount);
    setFemales(femalesCount);
    setMalesPercent(Math.round(malesCount * 100 / contacts.length));
    setFemalesPercent(Math.round(femalesCount * 100 / contacts.length));
  }, [contacts]);

  useEffect(() => {
    let languagesCount: Language[] = [];
    contacts.forEach(contact => {
      const index = languagesCount.findIndex(language => language.name === contact.language);
      if (index === -1) {
        const language = { name: contact.language, count: 1, percent: 0 };
        languagesCount.push(language);
      } else {
        languagesCount[index].count++;
      }
    });
    languagesCount = languagesCount.map(language => {
      language.percent = language.count * 100 / contacts.length;
      return language;
    });
    setLanguages(languagesCount.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0));
  }, [contacts])

  return (
    <Container>
      {contacts.length > 0 ? (
        <div>
          <h1>Gênero</h1>
          <Divider />
          <p>Aqui estão os dados de gênero dos seus contatos.</p>
          <GenderGridTitle>
            <div>
              <strong>Masculino</strong>
              <span>({males})</span>
            </div>
            <div>
              <strong>Feminino</strong>
              <span>({females})</span>
            </div>
          </GenderGridTitle>
          <GenderGridBar malesPercent={malesPercent} femalesPercent={femalesPercent} >
              <MaleBar percent={malesPercent}>
                <span>{malesPercent}%</span>
              </MaleBar>
              <FemaleBar percent={femalesPercent}>
                <span>{femalesPercent}%</span>
              </FemaleBar>
          </GenderGridBar>
          <h1>Linguagem</h1>
          <Divider />
          <p>Aqui estão os dados de linguagem dos seus contatos. Veja quantas pessoas falam cada língua!</p>
          <LanguageCardGrid>
            {languages.map(language => (
              <div key={language.name}>
                <p>{language.name}</p>
                <strong>{language.percent.toFixed(2)}%</strong>
                <span>{language.count === 1 ? `${language.count} contato` : `${language.count} contatos`}</span>
              </div>
            ))}
          </LanguageCardGrid>
        </div>
      ) : (
        <NoData>
          <p>Não há contatos para calcular as estatísticas.</p>
        </NoData>
      )}
    </Container>
  );
}

export default Statistics;