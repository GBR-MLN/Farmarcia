import React from "react";
import "./index.css";
import { useState } from "react";

function Main() {
  const [senhaNormal, setSenhaNormal] = useState([]);
  const [senhaPreferencial, setSenhaPreferencial] = useState([]);
  const [armazenaSenhasGeradas, setArmazenaSenhasGeradas] = useState([]);

  const gerarSenhaNormal = () => {
    const normal = Math.floor(Math.random() * 1000);
    setSenhaNormal((prev) => [...prev, normal]);
    setArmazenaSenhasGeradas((prev) => [...prev, normal]);
  };

  const gerarSenhaPreferencial = () => {
    const preferencial = Math.floor(Math.random() * 1000);
    setSenhaPreferencial((prev) => [...prev, preferencial]);
    setArmazenaSenhasGeradas((prev) => [...prev, preferencial]);
  };

  const chamarSenha = () => {
    const senhasPreferenciaisOrdenadas = senhaPreferencial.sort(
      (a, b) => a - b
    );
    const senhasNormaisOrdenadas = senhaNormal.sort((a, b) => a - b);

    let senhaChamadas = null;

    if (senhasPreferenciaisOrdenadas.length > 0) {
      senhaChamadas = senhasPreferenciaisOrdenadas[0];

      setSenhaPreferencial((prev) => prev.filter((s) => s !== senhaChamadas));
    } else if (senhasNormaisOrdenadas.length > 0) {
      senhaChamadas = senhasNormaisOrdenadas[0];

      setSenhaNormal((prev) => prev.filter((s) => s !== senhaChamadas));
    }

    if (senhaChamadas !== null) {
      alert(`Chamando senha: ${senhaChamadas}`);

      setArmazenaSenhasGeradas((prev) =>
        prev.filter((s) => s !== senhaChamadas)
      );
    } else {
      alert("Não há senhas para chamar");
    }
  };

  return (
    <div className="main-container">
      <div className="div-filas">
        <div className="div-fila-normal">
          <button onClick={gerarSenhaNormal} className="btn-normal">
            Gerar Senha Normal
          </button>
        </div>

        <div className="div-fila-preferencial">
          <button onClick={gerarSenhaPreferencial} className="btn-preferencial">
            Gerar Senha Preferencial
          </button>
        </div>
      </div>

      <div className="div-chamar-btn">

        <div>
          <button onClick={chamarSenha} className="btn-chamar">
            Chamar Senha
          </button>
        </div>

        <div className="listagem-senhas">
          <div className="senha-normal-container">
            <h3>Senhas Normais</h3>
            <ul>
              {senhaNormal.map((senha, index) => (
                <li key={index}>{senha}</li>
              ))}
            </ul>
          </div>

          <div className="senha-preferencial-container">
            <h3>Senhas Preferenciais</h3>
            <ul>
              {senhaPreferencial.map((senha, index) => (
                <li key={index}>{senha}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

    /* <div className="div-chamar-btn">

        <button onClick={chamarSenha} className="btn-chamar">
          Chamar Senha
        </button>

        <div className="div-display-senhas">
          {armazenaSenhasGeradas.map((senha, index) => (
            <div key={index} className="senha-item">
              {senha}
            </div>
          ))}
        </div>

      </div> */

    // </div >
  );
}

export default Main;
