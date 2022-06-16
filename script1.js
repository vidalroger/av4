class Filme {

    constructor() {
        this.id = 1;
        this.arrayFilmes = [];
        this.editaId = null;
    }
    
    salvar() {
        let filme = this.lerDados();
        
        if(this.validaCampos(filme)) {
            if (this.editaId == null) {
                this.adicionar(filme);
            } else {
                this.atualizar(this.editaId, filme);
            }
           
        }
        
        this.listaTabela();
        this.cancelar();
        
    }
    
    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';
        
        for(let i = 0; i < this.arrayFilmes.length; i++ ) {
            let tr = tbody.insertRow();
            
            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_acoes = tr.insertCell();
            
            td_id.innerText = this.arrayFilmes[i].id;
            td_nome.innerText = this.arrayFilmes[i].nomeFilme;
            
            td_id.classList.add('center');
            td_acoes.classList.add('img');
            
            let imgEditar = document.createElement('img');
            imgEditar.src = 'img/editar.png';
            imgEditar.setAttribute("onclick","filme.edicao("+ JSON.stringify(this.arrayFilmes[i]) +")");
            
            
            let imgDeletar = document.createElement('img');
            imgDeletar.src = 'img/deletar.png';                         
            imgDeletar.setAttribute("onclick","filme.deletar("+ this.arrayFilmes[i].id +")");
            
            
            td_acoes.appendChild(imgEditar);
            td_acoes.appendChild(imgDeletar);
            
            
        }
    }
    
    adicionar(filme){
        this.arrayFilmes.push(filme); 
        this.id++;  
    }
    
    atualizar(id, filme) {
        for(let i = 0; i < this.arrayFilmes.length; i++) {
            if(this.arrayFilmes[i].id == id) {
                this.arrayFilmes[i].nomeFilme = filme.nomeFilme;
                this.arrayFilmes[i].generoFilme = filme.generoFilme;
                this.arrayFilmes[i].tempoFilme = filme.tempoFilme;
                this.arrayFilmes[i].sinopseFilme = filme.sinopseFilme;
            }
            
        }
    }
    
    edicao(dadosFilme) {
    
        this.editaId = dadosFilme.id;
    
        document.getElementById('nomeFilme').value = dadosFilme.filme;
        document.getElementById('generoFilme').value = dadosFilme.filme;
        document.getElementById('tempoFilme').value = dadosFilme.filme;                  
        document.getElementById('sinopseFilme').value = dadosFilme.filme;
        
        document.getElementById('botao1').innerText = 'Atualizar';
    }
    
    lerDados() {
        let filme = {}
        
        filme.id = this.id;
        filme.nomeFilme = document.getElementById('nomeFilme').value;
        filme.generoFilme = document.getElementById('generoFilme').value;
        filme.tempoFilme = document.getElementById('tempoFilme').value;
        filme.sinopseFilme = document.getElementById('sinopseFilme').value;
        
        return filme;
    }
    
    validaCampos(filme) {
        let mensagem = '';
        
        if (filme.nomeFilme == '') {
            mensagem += 'Informe nome do filme!!\n\n';
        }
        if (filme.generoFilme == '') {
            mensagem += 'Informe genero do filme!!\n\n';
        }
        if (filme.tempoFilme == '') {
            mensagem += 'Informe tempo do filme!!\n\n';
        }
        if (filme.sinopseFilme == '') {
            mensagem += 'Informe sinopse do filme!!\n\n';
        }
        
        if (mensagem != '') {
            alert(mensagem);
            return false
            
        }
        
        return true;
    }
    
    cancelar() {
        document.getElementById('nomeFilme').value = '';
        document.getElementById('generoFilme').value = '';
        document.getElementById('tempoFilme').value = ''; 
        document.getElementById('sinopseFilme').value = '';
        
        document.getElementById('botao1').innerText = 'Salvar';
        this.editaId = null;
    }
    
    
    deletar(id) {
        if (confirm('Deseja deletar o id:' + id)) {
            let tbody = document.getElementById('tbody');
        
            for (let i = 0; i < this.arrayFilmes.length; i++ ) {    
                if (this.arrayFilmes[i].id == id) {
                    this.arrayFilmes.splice(i, 1);
                    tbody.deleteRow(i);
                }
            
            }
        }
    
    }
} 

var filme = new Filme();
