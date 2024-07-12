import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { StarFilledIcon } from '@radix-ui/react-icons'
import { Calendar, Clock, StarIcon } from 'lucide-react'

interface IIntegrador {
  nome: string
  avatar: string
  cargo: string
  responsabilidade: string
  dia: string
  hora: string
  inicio: string
  stars: number
}
export default function CardInfoEmpregado({
  nome,
  avatar,
  cargo,
  responsabilidade,
  dia,
  hora,
  inicio,
  stars
}: IIntegrador) {
  const starsIcons = [
    <StarFilledIcon className="text-amber-400" />,
    <StarFilledIcon className="text-amber-400" />,
    <StarFilledIcon className="text-amber-400" />,
    <StarFilledIcon className="text-amber-400" />,
    <StarFilledIcon className="text-amber-400" />
  ]
  return (
    <Card className="w-full grid grid-cols-5 gap-4 items-center hover:border hover:border-primary hover:cursor-pointer">
      <CardHeader className="flex items-center justify-center">
        <CardTitle>
          <Avatar>
            <AvatarImage src={avatar} />
            <AvatarFallback>{nome}</AvatarFallback>
          </Avatar>
        </CardTitle>
        <CardDescription className="text-base font-bold">
          {nome}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col justify-center items-start pt-6">
        <p className="font-bold text-primary">Cargo:</p>
        <p>{cargo}</p>
      </CardContent>
      <CardContent className="flex flex-col justify-center items-start pt-6 col-span-2">
        <p className="font-bold text-primary">Responsabilidades:</p>
        <p>{responsabilidade}</p>
        <p className="font-bold text-primary">Carga horária:</p>
        <ul className="flex items-center gap-4 pt-1">
          <li className="flex items-center gap-1 text-sm">
            <Calendar size={20} /> {dia}
          </li>
          <li className="flex items-center gap-1 text-sm">
            <Clock size={20} /> {hora}
          </li>
        </ul>
      </CardContent>
      <CardContent className="flex flex-col justify-center items-start pt-6">
        <p className="font-bold text-primary">Início:</p>
        <p>{inicio}</p>
        <p className="font-bold text-primary">Stars:</p>
        <p className="flex">
          {starsIcons.map((star, index) => {
            if (index >= stars) {
              star = <StarIcon size={14} className="text-primary" />
            }
            return star
          })}
        </p>
      </CardContent>
    </Card>
  )
}
