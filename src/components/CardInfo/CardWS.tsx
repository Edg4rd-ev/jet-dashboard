import { Info } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '../ui/tooltip'
import { ElementType, ReactNode } from 'react'
import { cn } from '../../lib/utils'

enum TitleType {
  'GREEN' = 0,
  'RED' = 1
}

interface IPoints {
  icon: ElementType
  title: string
  descricao?: string
  children: ReactNode
  type?: number
}

export default function CardInfoPoints({
  icon: Icon,
  title,
  descricao,
  children,
  type
}: IPoints) {
  return (
    <Card className={cn('w-full flex flex-col items-center')}>
      <CardHeader className="w-full flex items-start">
        {type === TitleType.GREEN ? (
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
        ) : (
          <CardTitle className="flex items-center justify-between w-full text-red-500">
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
        )}
      </CardHeader>
      <CardContent className="w-full px-6 pl-12">
        <p className="text-4xl font-bold ">{children}</p>
      </CardContent>
    </Card>
  )
}
