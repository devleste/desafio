import axios from "axios";

const BASE_URL = "https://desafio-back-leste.vercel.app";

export class ContatoService{
    static getContatos(){
        return axios.get(BASE_URL + '/contatos');
    }

    static getContato(id){
        return axios.get(`${BASE_URL}/contatos/${id}`);
    }

    static createContato(body){
        return axios.post(`${BASE_URL}/contatos`, body);
    }

    static updateContato(id, body){
        return axios.put(`${BASE_URL}/contatos/${id}`, body);
    }

    static deleteContato(id){
        return axios.delete(`${BASE_URL}/contatos/${id}`);
    }
}