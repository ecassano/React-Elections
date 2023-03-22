export default function Candidate({
  votes = 0,
  candidateInfo = {},
  percentage = 0,
  elected = false,
}) {
  const classElected = 'text-green-600';
  const classNotElected = 'text-orange-500';
  return (
    <div className="shadow p-4 rounded-md m-4">
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <img
            src={`/img/${candidateInfo.username}.png`}
            alt={candidateInfo.name}
            className="w-20 h-20 rounded-full"
          />
          <div className="ml-12">
            <h3
              className={`font-semibold ${
                elected ? classElected : classNotElected
              }`}
            >
              {percentage.toFixed(2)}%
            </h3>
            <p>{votes.toLocaleString()} votos</p>
          </div>
        </div>
        <h2 className="my-4">{candidateInfo.name}</h2>
        <h3
          className={`font-semibold ${
            elected ? classElected : classNotElected
          }`}
        >
          {elected ? 'Eleito' : 'Não Eleito'}
        </h3>
      </div>
    </div>
  );
}
