
const Form = () => {
    return (
      <form className={S.form}>
          <Label textoLabel="Nome:"/>
          <Input tipo="text"/>
          <Label textoLabel="Email:"/>
          <Input tipo="email"/>
          <Label textoLabel="CPF:"/>
          <Input tipo="text"/>
          <div>
            <Radio/><Label textoLabel="Masculino"/>
            <Radio/><Label textoLabel="Feminino"/>
          </div>
          <button className={S.btnForm}>Enviar</button>
      </form>
    )
  }

export default Form