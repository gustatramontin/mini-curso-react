
import {useState} from 'react'

export default function ListagemDePessoas() {

    const [pessoas, setPessoas] = useState([])
    const [error, setError] = useState(null)

    const getPessoas = async e => {

    const res = await fetch("http://localhost:5000/listar_pessoas")
    const json = await res.json()
      if (json.resultado == 'ok')
        setPessoas(json.detalhes)
    else
      setError(json.detalhes)
    }
      return (<>
        <div className="m-3">
          <button onClick={getPessoas} className="border rounded-xs p-1 hover:bg-gray-200 hover:cursor-pointer">lisar pessoas</button>
        </div>
        <div className="m-3 flex flex-col">
          {
            pessoas.map(pessoa => (
              <div className="flex flex-col ml-3 mb-1 border rounded-xs p-1">
                <strong>{pessoa.nome}</strong>
                <small>{pessoa.email}</small>
                <small>{pessoa.telefone}</small>
              </div>
            ))}

          {error && <p>
            {error}
          </p>}
      </div>
      </>
)
}
