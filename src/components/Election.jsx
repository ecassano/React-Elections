import Candidate from './Candidate';

export default function Election({ children, cityInfo }) {
  return (
    <div className="flex flex-col flex-wrap border-2 border-slate-100 p-2 text-center">
      <h2 className="font-bold text-lg">Eleição em {cityInfo.name}</h2>
      <div className="flex justify-around my-4">
        <span>
          <strong className="mr-1">Total de eleitores:</strong>
          <span>{cityInfo.votingPopulation.toLocaleString()}</span>
        </span>
        <span>
          <strong className="mr-1">Abstenção:</strong>
          <span>{cityInfo.absence.toLocaleString()}</span>
        </span>
        <span>
          <strong className="mr-1">Comparecimento:</strong>
          <span>{cityInfo.presence.toLocaleString()}</span>
        </span>
      </div>
      <p>{children.length} candidatos</p>
      <div className="flex justify-center flex-wrap my-6 w-10/12 mx-auto">
        {children}
      </div>
    </div>
  );
}
