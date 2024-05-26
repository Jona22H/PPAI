export default class Usuario {
    _contraseña;
    _nombre;
    _premium;
    _cobroPremium;
    constructor(contra, nom, prem, cobroPrem) {
        this._contraseña = contra;
        this._nombre = nom;
        this._premium = prem;
        this._cobroPremium = cobroPrem;
    }
    getContraseña() {
        return this._contraseña;
    }
    setContraseña(v) {
        this._contraseña = v;
    }
    getNombre() {
        return this._nombre;
    }
    setNombre(v) {
        this._nombre = v;
    }
    getPremium() {
        return this._premium;
    }
    setPremium(v) {
        this._premium = v;
    }
    getCobroPremium() {
        return this._cobroPremium;
    }
    setCobroPremium(v) {
        this._cobroPremium = v;
    }
    esTuUsuario(usuario) {
        return this._nombre === usuario.getNombre();
    }
}
