import { Check, Percent, Workflow } from 'lucide-react'
import { Card } from '../components/CardInfo'
export default function Home() {
  return (
    <div className="w-full flex flex-row items-start pl-4 pt-4">
      <div className="w-full">
        <div className="w-full grid grid-cols-3 gap-4">
          <Card.Integracoes
            icon={Workflow}
            title="Integrações"
            descricao="Quantidade de integrações atribuidas a este usuário"
            qtd={10}
          />
          <Card.Integracoes
            icon={Check}
            title="Concluídas"
            descricao="Quantidade de integrações concluídas"
            qtd={4}
          />
          <Card.Integracoes
            icon={Percent}
            title="Percentual"
            descricao="Percentual de integrações concluidas x integrações totais"
            qtd={`${(4 / 10) * 100}%`}
          />
        </div>
        <div className="flex flex-col space-y-4 pt-4">
          <Card.Empregados
            nome="Bruno"
            avatar="https://i.pinimg.com/564x/0c/91/ee/0c91eec3b2b39b7c5f29ab78b36ef6d7.jpg"
            cargo="Integrador"
            responsabilidade="Desenvolvimento"
            dia="Seg ~ Sex"
            hora="08h ~ 14h"
            inicio="10/03/2024"
            stars={3}
          />
          <Card.Empregados
            nome="Edgar"
            avatar="https://i.pinimg.com/564x/d1/51/83/d15183084d2a23f02b5f3a54740e0b5d.jpg"
            cargo="Integrador"
            responsabilidade="Pré-integração + Desenvolvimento/Suporte"
            dia="Seg ~ Sex"
            hora="08h ~ 17h48m"
            inicio="10/03/2023"
            stars={5}
          />
          <Card.Empregados
            nome="Augusto"
            avatar="https://i.pinimg.com/564x/b4/91/45/b49145009a5a6b9a848231fe1afadec0.jpg"
            cargo="Integrador"
            responsabilidade="Desenvolvimento"
            dia="Seg ~ Sex"
            hora="08h ~ 14h"
            inicio="10/03/2023"
            stars={3}
          />
        </div>
      </div>
      <div className="w-full px-4">
        <Card.Observacoes />
      </div>
    </div>
  )
}
