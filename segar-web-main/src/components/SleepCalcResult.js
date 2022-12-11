import '../styles/SleepCalcResult.css';

export default function SleepCalcResult({ results }) {
  return (
    <section>
      <h2 className='title'>Cobalah tidur pada waktu berikut:</h2>

      <ul id='sleep-times'>
        {results.map((time, index) => (
          <li key={index}>
            <p>{time}</p>
          </li>
        ))}
      </ul>

      <h3 className='title' id='note'>
        * <span style={{ textDecoration: '2px underline' }}>Note:</span> Tolong
        diingat, anda perlu tidur pada waktu tersebut.
        <br />
        Rata-rata manusia membutuhkan waktu 14 menit untuk tertidur, jadi atur
        secara cermat!
      </h3>

      <h3 className='title' id='greet'>
        ~ Semoga mimpi indah ! ~
      </h3>
    </section>
  );
}
