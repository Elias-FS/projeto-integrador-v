export class Academia {
    descricao: string;
    nome: string;
    imagem?: string;
    id: number;
    usuarioId: number;
    dataCriacao: Date;

    constructor(id: number, descricao: string, nome: string, imagem: string, usuarioId: number, dataCriacao: Date){
        this.id = id;
        this.descricao=descricao;
        this.nome=nome;
        this.imagem=imagem;
        this.usuarioId=usuarioId;
        this.dataCriacao=dataCriacao;
    }
}