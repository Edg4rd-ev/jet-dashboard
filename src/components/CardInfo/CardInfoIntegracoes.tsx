import { Info } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '../ui/tooltip'
import { ElementType } from 'react'

interface IIntegracoes {
  icon: ElementType
  title: string
  descricao: string
  qtd: number | string
}

export default function CardInfoIntegracoes({
  icon: Icon,
  title,
  descricao,
  qtd
}: IIntegracoes) {
  return (
    <Card className="flex flex-col items-center">
      <CardHeader className="w-full flex items-start">
        <CardTitle className="flex items-center justify-between w-full text-primary">
          <div className="flex items-center gap-1">
            <Icon />
            {title}
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info size={14} />
              </TooltipTrigger>
              <TooltipContent>
                <p>{descricao}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold ">{qtd}</p>
      </CardContent>
    </Card>
  )
}
