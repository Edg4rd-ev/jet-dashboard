import { Info } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '../ui/tooltip'
import { ReactNode } from 'react'
import { ScrollArea } from '../ui/scroll-area'

type ICardInfoObs = {
  children: ReactNode
}

export default function CardInfoObs({ children }: ICardInfoObs) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-primary text-2xl flex items-center gap-1">
          Observações{' '}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info size={14} />
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  Observações sobre o desempenho de cada integrador. As
                  observações levam em conta: lógica, atendimento, prazos e
                  conclusão de integrações
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardTitle>
      </CardHeader>
      <ScrollArea className="h-[21.6rem] w-full rounded-xl border p-4">
        <CardContent className="text-justify w-full h-full">
          {children}
        </CardContent>
      </ScrollArea>
    </Card>
  )
}
