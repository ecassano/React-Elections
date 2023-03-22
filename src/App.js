import { useState, useEffect } from 'react';

import Header from './components/Header';
import Loading from './components/Loading';
import Main from './components/Main';
import Error from './components/Error';
import SelectForm from './components/SelectForm';
import Election from './components/Election';
import Candidate from './components/Candidate';
import {
  apiGetAllCandidates,
  apiGetAllCities,
  apiGetElectionInfo,
} from './services/apiServices';

function App() {
  const [loading, setLoading] = useState(true);
  const [cities, setCities] = useState('');
  const [candidates, setCandidate] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [electionData, setElectionData] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    (async function getCities() {
      try {
        const data = await apiGetAllCities();
        const cities = data.data;
        const data2 = await apiGetElectionInfo(cities[0].id);
        const election = data2.data;
        const data3 = await apiGetAllCandidates();
        const candidates = data3.data;
        setCandidate(candidates);
        setElectionData(election.sort((a, b) => b.votes - a.votes));
        setCities(cities);
        setSelectedCity(cities[0]);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    })();
  }, []);

  useEffect(() => {
    (async function updateData() {
      try {
        const electionData = await apiGetElectionInfo(selectedCity.id);
        const election = electionData.data.sort((a, b) => b.votes - a.votes);
        setElectionData(election);
      } catch (error) {
        setError(error.message);
      }
    })();
  }, [selectedCity]);

  function handleSelectChange(selectedCity) {
    const curCity = cities.find(city => city.name === selectedCity);
    setSelectedCity(curCity);
  }

  let mainJsx = (
    <div className="flex justify-center my-8">
      <Loading></Loading>
    </div>
  );

  if (error) {
    mainJsx = <Error>{error}</Error>;
  }

  if (!loading && !error) {
    mainJsx = (
      <div className="flex flex-col">
        <div className="w-fit mx-auto mb-4">
          <SelectForm
            label={'Escolha o Município'}
            cities={cities}
            onSelectChange={handleSelectChange}
            value={selectedCity.name}
          ></SelectForm>
        </div>
        <Election cityInfo={selectedCity}>
          {electionData.map(({ candidateId, votes }, i) => (
            <Candidate
              key={candidateId}
              id={candidateId}
              votes={votes}
              candidateInfo={candidates.find(
                candidate => candidate.id === candidateId
              )}
              percentage={(votes / selectedCity.presence) * 100}
              elected={i === 0 ? true : false}
            ></Candidate>
          ))}
        </Election>
      </div>
    );
  }

  return (
    <div className="App">
      <Header>React-Elections</Header>
      <Main>{mainJsx}</Main>
    </div>
  );
}

export default App;
