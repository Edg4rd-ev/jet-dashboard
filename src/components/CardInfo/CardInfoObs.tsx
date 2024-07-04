import { Info } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '../ui/tooltip'

export default function CardInfoObs() {
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
      <CardContent>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
          exercitationem natus hic, corrupti soluta aliquid. Sunt perspiciatis
          voluptates vero, delectus nostrum tempore modi eum molestias obcaecati
          aliquam consectetur maiores molestiae! Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Id exercitationem natus hic, corrupti
          soluta aliquid. Sunt perspiciatis voluptates vero, delectus nostrum
          tempore modi eum molestias obcaecati aliquam consectetur maiores
          molestiae!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
          exercitationem natus hic, corrupti soluta aliquid. Sunt perspiciatis
          voluptates vero, delectus nostrum tempore modi eum molestias obcaecati
          aliquam consectetur maiores molestiae!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          distinctio magnam assumenda eius? Cupiditate quae fuga sapiente
          laudantium natus nesciunt nihil sint ipsam officiis soluta! Eaque
          ipsam a amet possimus.
        </p>
      </CardContent>
    </Card>
  )
}
