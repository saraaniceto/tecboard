import "./formulario-de-evento.estilos.css";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { ListaSuspensa } from "../ListaSuspensa";
import { Botao } from "../Botao";

export function FormularioDeEvento({ temas, aoSubmeter }) {
  function aoFormSubmetido(formData) {

    const evento = {
      capa: formData.get("capaEvento"),
      tema: temas.find(function (item) {
        return item.id == formData.get("temaEvento");
      }),
      data: new Date(formData.get("dataEvento")),
      titulo: formData.get("nomeEvento"),
    };

    aoSubmeter(evento);
  }

  return (
    <form className="form-evento" action={aoFormSubmetido}>
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">Qual é o nome do evento?</Label>
          <CampoDeEntrada
            type="text"
            id="nomeEvento"
            placeholder="Summer dev hits"
            name="nomeEvento"
          />
          <Label htmlFor="capaEvento">
            Qual é o endereço da imagem de capa?
          </Label>
          <CampoDeEntrada
            type="text"
            id="capaEvento"
            placeholder="http://..."
            name="capaEvento"
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Data do evento</Label>
          <CampoDeEntrada type="date" id="dataEvento" name="dataEvento" />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="temaEvento">Tema do evento</Label>
          <ListaSuspensa id="temaEvento" name="temaEvento" itens={temas} />
        </CampoDeFormulario>
      </div>

      <Botao>Criar Evento</Botao>
    </form>
  );
}
