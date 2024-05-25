import PantallaAdministradorActualizcionBonVino from "./models/PantallaAdministradorActualizcionBonVino";
import { Gestor } from "./models/gestor";

function main(){
  const gestor = new Gestor()
  const pantalla = new PantallaAdministradorActualizcionBonVino()

  document.addEventListener('DOMContentLoaded',() => {
    pantalla.mostrarPantalla()
  })
}