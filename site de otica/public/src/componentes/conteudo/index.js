import SecaoCapa from '../SecaoCapa';
import SecaoSobre from '../SecaoSobre';
import SecaoProdutos from '../SecaoContato';

export default function Conteudo()
{
    return(
        <main>
            <SecaoCapa/>
            <SecaoProdutos/>
            <SecaoSobre/>
            <SecaoContato/>
        </main>
    )
}