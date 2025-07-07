import {useState} from 'react'

export default function FormPessoa() {

  const [dados, setDados] = useState({nome: "", email: "", telefone: ""})

  const incluir = async formData => {
    const nome     = formData.get("nome")
    const email    = formData.get("email")
    const telefone = formData.get("telefone")

    try {
    await fetch("http://localhost:5000/incluir_pessoa", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({nome, email, telefone})
    })
      alert("Dados enviados com sucesso.")
    } catch {

    }
  }
  
  return (
    <form className="flex flex-col" action={incluir}>

    <label>Nome:     </label>
    <input className="border rounded-xs" name="nome" type="text"  />
    <label>Email:    </label>
    <input className="border rounded-xs" name="email" type="email" />
    <label>Telefone: </label>
    <input className="border rounded-xs" name="telefone" type="text"  />
      <button type="submit">Incluir!</button>
  </form>)
}
