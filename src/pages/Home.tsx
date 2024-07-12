import { ThumbsDown, ThumbsUp } from 'lucide-react'
import { Card } from '../components/CardInfo'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
export default function Home() {
  return (
    <div className="w-full flex flex-row items-start pl-4 pt-4">
      <Tabs
        defaultValue="account"
        className="w-full flex items-start justify-between"
      >
        <TabsList className="flex flex-col w-full gap-2">
          <TabsTrigger value="augusto" className="w-full">
            <Card.Empregados
              nome="Augusto"
              avatar="https://i.pinimg.com/564x/b4/91/45/b49145009a5a6b9a848231fe1afadec0.jpg"
              cargo="Integrador"
              responsabilidade="Desenvolvimento"
              dia="Seg ~ Sex"
              hora="08h ~ 14h"
              inicio="18/04/2024"
              stars={3}
            />
          </TabsTrigger>
          <TabsTrigger value="bruno" className="w-full">
            <Card.Empregados
              nome="Bruno"
              avatar="https://i.pinimg.com/564x/0c/91/ee/0c91eec3b2b39b7c5f29ab78b36ef6d7.jpg"
              cargo="Integrador"
              responsabilidade="Desenvolvimento"
              dia="Seg ~ Sex"
              hora="08h ~ 14h"
              inicio="18/03/2024"
              stars={3}
            />
          </TabsTrigger>
          <TabsTrigger value="edgar" className="w-full">
            <Card.Empregados
              nome="Edgar"
              avatar="https://i.pinimg.com/564x/d1/51/83/d15183084d2a23f02b5f3a54740e0b5d.jpg"
              cargo="Integrador"
              responsabilidade="Pré-integração + Desenvolvimento/Suporte"
              dia="Seg ~ Sex"
              hora="08h ~ 17h48m"
              inicio="10/03/2023"
              stars={3}
            />
          </TabsTrigger>
        </TabsList>
        <div className="w-full">
          <TabsContent value="augusto">
            <div className="w-full px-4">
              <Card.Observacoes>
                <p>
                  Integrador determinado, apesar de estar começando na área e
                  ainda não ter muito conhecimento de lógica e APIs, seu esforço
                  para aprender e concluir suas demandas é notório.
                </p>
                <br />
                <p>
                  Durante o período em que o ensinei sobre o assunto, ele se
                  mostrou atento e absorveu tudo que lhe foi passado. Logo, não
                  teve dificuldades nos testes.
                </p>
                <br />
                <p>
                  No entanto, sua falta de costume em atendimentos a clientes é
                  visível. Ele tem certa dificuldade em elaborar
                  frases/respostas para se comunicar com os clientes.
                </p>
                <br />
                <p>
                  Em relação a prazos, Augusto consegue cumprir e concluir suas
                  demandas de acordo com o esperado, realiza as documentações e
                  atualiza o Jira. Porém, ele tem bastante dificuldade em alguns
                  casos envolvendo lógica e conhecimento com APIs, o que pode
                  gerar demora em entregas relativamente simples. No entanto,
                  ele sempre busca tirar suas dúvidas, mas em alguns casos, ele
                  pode ser mais independente e tentar ir atrás da solução por
                  conta própria.
                </p>
              </Card.Observacoes>
              <div className="flex items-start justify-between gap-4 pt-4">
                <Card.Points
                  title="Forças"
                  icon={ThumbsUp}
                  descricao="Pontos fortes"
                  type={0}
                >
                  <ol className="list-disc text-base font-normal">
                    <li>
                      <p>Determinação;</p>
                    </li>
                    <li>
                      <p>Comprometimento;</p>
                    </li>
                    <li>
                      <p>Humildade;</p>
                    </li>
                    <li>
                      <p>Vontade de aprender;</p>
                    </li>
                    <li>
                      <p>Facilidade de aprendizado;</p>
                    </li>
                    <li>
                      <p>Prazos/Conclusão;</p>
                    </li>
                    <li>
                      <p>Comunicação interna;</p>
                    </li>
                  </ol>
                </Card.Points>
                <Card.Points
                  title="Fraquezas"
                  icon={ThumbsDown}
                  descricao="Pontos fracos"
                >
                  <ol className="list-disc text-base font-normal">
                    <li>
                      <p>Lógica;</p>
                    </li>
                    <li>
                      <p>Comunicação com clientes;</p>
                    </li>
                    <li>
                      <p>Dependencia;</p>
                    </li>
                    <li>
                      <p>Conhecimento sobre API/Webhooks;</p>
                    </li>
                  </ol>
                </Card.Points>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="bruno">
            <div className="w-full px-4">
              <Card.Observacoes>
                <p>
                  Integrador inteligente, consegue pegar as demandas com
                  facilidade, principalmente entender o que o cliente precisa.
                  Tem uma boa lógica de programação e já está familiarizado com
                  APIs.
                </p>
                <br />
                <p>
                  Não houve dificuldades durante o treinamento e se adaptou
                  rápido à ferramenta de integração, o <b>n8n</b>. Nela fez a
                  sua primeira integração com o Pipedrive e se saiu bem.
                </p>
                <br />
                <p>
                  Já trabalhou no suporte, logo tem uma boa comunicação com os
                  clientes e não demora a responder.
                </p>
                <br />
                <p>
                  No quesito prazo, ultimamente ele tem passado bastante tempo,
                  cerca de 1 (um) mês, com algumas integrações em andamento. O
                  principal motivo desse prazo estendido se deve ao fato de os
                  clientes estarem a todo tempo solicitando modificações. Porém,
                  isso me leva a pensar que ele está com dificuldades e vai
                  atrás da solução até encontrar por conta própria, o que é bom,
                  mas em caso de dúvidas, ele não deve hesitar em perguntar.
                </p>
              </Card.Observacoes>
              <div className="flex items-start justify-between gap-4 pt-4">
                <Card.Points
                  title="Forças"
                  icon={ThumbsUp}
                  descricao="Pontos fortes"
                  type={0}
                >
                  <ol className="list-disc text-base font-normal">
                    <li>
                      <p>Lógica;</p>
                    </li>
                    <li>
                      <p>Comprometimento;</p>
                    </li>
                    <li>
                      <p>Conhecimento sobre API/Webhooks;</p>
                    </li>
                    <li>
                      <p>Proatividade;</p>
                    </li>
                    <li>
                      <p>Facilidade de aprendizado;</p>
                    </li>
                    <li>
                      <p>Boa comunicação com os clientes;</p>
                    </li>
                    <li>
                      <p>Independente.</p>
                    </li>
                  </ol>
                </Card.Points>
                <Card.Points
                  title="Fraquezas"
                  icon={ThumbsDown}
                  descricao="Pontos fracos"
                >
                  <ol className="list-disc text-base font-normal">
                    <li>
                      <p>Demora nos prazos;</p>
                    </li>
                    <li>
                      <p>Comunicação interna;</p>
                    </li>
                    <li>
                      <p>Definir prioridade</p>
                    </li>
                  </ol>
                </Card.Points>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="edgar">
            <div className="w-full px-4">
              <Card.Observacoes>
                <p>Esta é uma auto avaliação minha.</p>
                <br />
                <p>
                  Atualmente tenho diversas responsabilidades neste setor,
                  porém, sinto que não consigo cumpri-las direito. Tenho
                  dificuldade de organizar minhas demandas e perco o foco
                  facilmente com outros chamados ou mensagens. O Jira tem me
                  ajudado muito neste ponto, e desde que entendi isso, venho
                  melhorando aos poucos este quesito
                </p>
                <br />
                <p>
                  Apesar da boa comunicação com clientes, tenho dificuldades em
                  responder com rapidez, justamente por não estar visualizando o
                  chat de atendimento. Porém, tenho empatia e busco sempre
                  entender o que ele precisa e trazer a melhor solução com base
                  na sua necessidade. Minha comunicação interna eu considero
                  boa, não deixo niguém sem resposta e quando isso acontece é
                  porque estou em call ou tentando focar em alguma demanda
                </p>
                <br />
                <p>
                  Não constumo estender minhas demandas, já sofri com isso, mas
                  hoje tento resolver tudo em call, junto ao cliente, porém, em
                  algum casos isso me foge, pois tenho problema em não saber
                  definir bem prioridades gerando uma certa demora em alguma
                  ocasiões.
                </p>
                <br />
                <p>
                  Em resumo, é isso. Aprendi muito desde que comecei nesta
                  função, sai do completo 0 de conhecimento em APIs, e hoje
                  tenho capacidade de ensinar qualquer pessoa sobre este tema.
                  Melhorei minha comunicação em geral, e agora só me resta
                  melhorar o comprometimento com prazos e organização
                </p>
              </Card.Observacoes>
              <div className="flex items-start justify-between gap-4 pt-4">
                <Card.Points
                  title="Forças"
                  icon={ThumbsUp}
                  descricao="Pontos fortes"
                  type={0}
                >
                  <ol className="list-disc text-base font-normal">
                    <li>
                      <p>Lógica;</p>
                    </li>
                    <li>
                      <p>Conhecimento sobre API/Webhooks;</p>
                    </li>
                    <li>
                      <p>Independencia;</p>
                    </li>
                    <li>
                      <p>Facilidade de aprendizado;</p>
                    </li>
                    <li>
                      <p>Boa comunicação em geral;</p>
                    </li>
                    <li>
                      <p>
                        Capacidade de resolver problemas e lhe dar com situações
                        adversas;
                      </p>
                    </li>
                    <li>
                      <p>Paciência.</p>
                    </li>
                  </ol>
                </Card.Points>
                <Card.Points
                  title="Fraquezas"
                  icon={ThumbsDown}
                  descricao="Pontos fracos"
                >
                  <ol className="list-disc text-base font-normal">
                    <li>
                      <p>Comprometimento com prazos;</p>
                    </li>
                    <li>
                      <p>Organização;</p>
                    </li>
                    <li>
                      <p>Horários.</p>
                    </li>
                  </ol>
                </Card.Points>
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
