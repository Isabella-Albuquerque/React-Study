import Pedido from "./Pedido"
import Cartao from "./Cartao";
import Feedback from "./Feedback";

const App = () => {
  const textoOK = "Já chegou"
  const textoNOK = "Ainda nao chegou"
  const funcaoOK = () => alert("Agradecemos o feedback")
  const funcaoNOK = () => alert("Vamos verificar o que aconteceu")
  const componenteFeedback = (
    <Feedback
    textoOK={textoOK}
    textoNOK={textoNOK}
    funcaoOK={funcaoOK}
    funcaoNOK={funcaoNOK}/> 
  )

  return <div className="container border rounded mt-2">
    <div className="row">

      <div className="col-sm-12 col-md-6 col-xxl-3">

        {/* Pedido () */}
        <Cartao //cartao recebe apenas um prop pois o children conta como 1
          cabecalho="22/04/2024">
          <Pedido
            icone="headset"
            titulo="headset"
            descricao="headset bluetooth" />
            {componenteFeedback}
        </Cartao>


      </div>

      <div className="col-sm-12 col-md-6 col-xxl-3">

        <Cartao
          cabecalho="10/10/2010">
          <Pedido
            icone="gamepad"
            titulo="Gamepad"
            descricao="controle nintendo" />
                        {componenteFeedback}

        </Cartao>

      </div>

      <div className="col-sm-12 col-md-6 col-xxl-3">

        <Cartao
          cabecalho="03/11/2025">
          <Pedido
            icone="hippo"
            titulo="hipopótamo"
            descricao="hipopotamo madagascar" />
                        {componenteFeedback}

        </Cartao>

      </div>

      <div className="col-sm-12 col-md-6 col-xxl-3">

        <Cartao
          cabecalho="25/06/2024">
          <Pedido
            icone="snowman"
            titulo="boneco de neve"
            descricao="balanca sozinho" />
                        {componenteFeedback}

        </Cartao>

      </div>
    </div>
  </div>;
};

export default App;
